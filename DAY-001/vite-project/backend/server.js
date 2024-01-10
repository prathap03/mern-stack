const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user.model");
const Order = require("./models/order.model")
const jwt = require("jsonwebtoken");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = require("http").createServer(app)
const io = require("socket.io")(server,{
  cors:{
    origin: "*",
  }
});

let users = {};

io.of("/api/socket").on("connection",(socket)=>{
  console.log("socket.io: User connected: ",socket.id);
  // console.log(socket.handshake.query.token)
  // let user = jwtDecode(socket.handshake.query.token)
  users[socket.id] = "";
  io.of("/api/socket").emit("online",users)


  socket.on("disconnect",()=>{
    console.log("socket.io: User disconnected: ",socket.id)
  
    users = Object.keys(users).reduce((object, key) => {
      if (key !== socket.id) {
        object[key] = users[key];
      }
      return object;
    }, {});
    delete users[socket.id]
    io.of("/api/socket").emit("online",users)  
  })
}
)





mongoose.connect("mongodb+srv://joeprathap123:joeprathap123@cluster0.qgfc2.mongodb.net/mern-stack");

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("MongoDB database connected");
  console.log("setting up change streams")
  const orderChangeStream = connection.collection("orders").watch([],{ fullDocument: 'updateLookup' });
  let order;
  orderChangeStream.on("change",(change)=>{
    switch(change.operationType){
      case "insert":
        console.log("New Insert: ",change.fullDocument._id)
        order = {
          id: change.fullDocument._id,
          status: change.fullDocument.status,
        }
        io.of("/api/socket").emit("newOrder",order)
        break
      case "update":
        console.log("New Update: ",change.fullDocument._id)
        order = {
          id: change.fullDocument._id,
          status: change.fullDocument.status,
        }
        io.of("/api/socket").to(change.fullDocument.client_id).emit("orderNotification",order)
        io.of("/api/socket").emit("readyOrder",order)
        break;
      case "delete":
          order = {
            id: change.documentKey._id,
          }
          io.of("/api/socket").emit("deliverOrder",change.documentKey._id)
        break;
      default:
        console.log("")
    }
  })
})

app.post("/api/socketId",async(req,res)=>{
  console.log(req.body)
  try{
    console.log(users)
    const user = await User.findOne({email:req.body.email})
    console.log(req.body.id,user.name )
    users[req.body.id] = user.name;
    io.of("/api/socket").emit("online",users)
    console.log(users)
    res.status(200).json({status:"ok"})
  }catch(err){
    console.log(err)
    res.status(201).json({status:err})
  } 
})

app.post("/api/chat",async(req,res)=>{
  console.log(req.body)
  try{
    if(req.body.id){
      console.log(req.body.id)
      io.of("/api/socket").emit("chat",req.body)
      res.status(200).json({status:"ok"})
      return
    }
    io.of("/api/socket").emit("chat",req.body)
    res.status(200).json({status:"ok"})
  }catch(err){
    console.log(err)
    res.status(201).json({status:err})
  }
})

app.post("/api/alertAll",async(req,res)=>{
  try{
    if(req.body.id){
      console.log(req.body.id)
      io.of("/api/socket").to(req.body.id).emit("alertAll")
      res.status(200).json({status:"ok"})
      return
    }
    io.of("/api/socket").emit("alertAll")
    res.status(200).json({status:"ok"})
  }catch(err){
    console.log(err)
    res.status(201).json({status:err})
  }
})

app.get("/api/getOrders",async(req,res)=>{
  try{
    const data = await Order.find();
    res.status(200).json({status:"ok",data:data,users:users})
  }catch(err){
    console.error(err)
    res.status(500).json({status:err})
  }
})

app.post("/api/addOrder",async (req,res)=>{
  console.log(req.body)
  try{
    const order = await Order.create({
      status:req.body.status,
      client_id:req.body.client_id,
    })
    res.status(200).json({status:"ok",order})
  }catch(err){
    console.log(err)
  }
})

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res
      .status(200)
      .json({ status: "ok", msg: "User created successfully", user });
  } catch (err) {
    console.log(err.code);
    if (err.code == 11000) {
      res.status(201).json({ status: "error", msg: "Email already exists" });
      return;
    }
    res.status(201).json({ status: "error", msg: err });
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
          { id: user._id, name: user.name, email: req.body.email },
          "srec",
          { expiresIn: '10s' }
        );
        res
          .status(200)
          .json({ status: "ok", msg: "User logged in successfully", user:token });
      }else{
        res.status(401).json({ status: "error", msg: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ status: "error", msg: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", msg: err });
  }
});

app.post("/api/prepareOrder",async(req,res)=>{
  console.log(req.body);
  try{
    const updatedOrder = await Order.updateOne({_id:req.body._id},{status:"ready"})
    res.status(200).json({updatedOrder})
  }catch(err){
    console.log(err)
    res.status(201).json(err)
  }
})


app.post("/api/deliverOrder",async(req,res)=>{
  console.log(req.body);
  try{
    const deliveredOrder = await Order.deleteOne({_id:req.body._id})
    res.status(200).json({deliveredOrder})
  }catch(err){
    console.log(err)
    res.status(201).json(err)
  }
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = app


