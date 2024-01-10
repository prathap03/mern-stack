import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl"

function Orders({socket,user}) {
  
  const TOKEN = import.meta.env.MAPBOX_API_TOKEN || "pk.eyJ1IjoicHJhdGhhcDJrMyIsImEiOiJjbHI3OHd2MmYyYjgyMmxwbnQwZnIybmJuIn0.F0fxqdK2BklBgi2pxV3TFA"
  const [orders, setOrders] = useState([]);
  const [isLoading,setLoading] = useState(false)
  const [ready,setReady] = useState({status:false,id:""})
  const add = new Audio("https://cdn.pixabay.com/audio/2022/04/05/audio_c5c228d922.mp3");
  const [online,setOnline] = useState([])
  const [chats,setChats] = useState([])
  const [newChat,setNewChat] = useState("")
  const [send,setSend] = useState(false)
  // const [viewPort,setViewPort] = useState({
  //   latitude: 37.7577,
  //   longitude: -122.4376,
  //   zoom: 8,
  //   mapboxApiAccessToken: TOKEN,
  // })
  add.volume = 0.5;

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chats]);


  useEffect(() => {
    setLoading(true)
    console.log(user)
    socket.on("online", (online) => {
      console.log(online)
      setOnline(online)
      }
    )
  
    socket.on("newOrder", async(order) => {
      setLoading(true)
      if(!orders.includes(order)){
        await fetchOrders()
        setLoading(false)
        console.log(order);
      }
    });
    socket.on("readyOrder", async(readyOrder) => {
      setLoading(true)
      const updatedOrder = orders.filter((order) => {
        return order._id != readyOrder._id;
      });
      console.log(readyOrder);
     
      await fetchOrders()
      setLoading(false)
     
    });

    socket.on("orderNotification",async(readyOrder)=>{
      console.log(readyOrder)
      Notification.requestPermission().then((permission)=>{
        if(permission === "granted"){
          const notification = new Notification("Order is ready",{
            body:`Order ${readyOrder.id} is ready`
          })
        }
      })
      await add.play()  
      setReady({status:true,id:readyOrder.id})
      setTimeout(()=>{setReady({status:false,id:""})},18000)
    })

    socket.on("deliverOrder", async(id) => {
      setLoading(true)
      const updatedOrder = orders.filter((order) => {
        return order._id != id;
      });
      console.log(id);

      await fetchOrders()
      setLoading(false)
    
    });

    socket.on("chat",(chat)=>{
      setChats((prevChats) => [...prevChats, chat]);
    })

    socket.on("alertAll",async()=>{
      setReady({status:true,id:"All"})
      setTimeout(()=>{setReady({status:false,id:""})},5000)
      await add.play()
    })



    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://mern-stack-backend-2zxg.onrender.com/api/getOrders");
        if (response.data) {
          console.log(response.data.data);
          setOrders(response.data.data);
          setOnline(response.data.users)
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
    setTimeout(()=>{ setLoading(false)},2000)
   

    return () => {
      socket.off("newOrder",(readyOrder)=>{});
      socket.off("readyOrder", (id)=>{});
      socket.off("deliverOrder", (id)=>{})
      socket.off("orderNotification",(readyOrder)=>{})
      socket.off("online",(online)=>{})
      socket.off("newChat",(chat)=>{})
  
    };
  }, [socket]);

  const addOrder = async()=>{
    try{
      const {data} = axios.post("https://mern-stack-backend-2zxg.onrender.com/api/addOrder",{
        status:"cooking",
        client_id: socket.id
      })
  
      if(!data){
        console.log("ERROR")
      }

    } catch(err){
      console.log(err)}
  
  }

  const Chat = async()=>{
    if(newChat=="") return
    await axios.post("https://mern-stack-backend-2zxg.onrender.com/api/chat",{
      id:socket.id,
      message:newChat,
    })
    setNewChat("")
    document.getElementById("chat").scrollTo(0,document.getElementById("chat").scrollHeight)
    // setChats([...chats,{id:socket.id,message:newChat}])
  }

  const prepareOrder = async(id)=>{
    try{
      const {data} = await axios.post("https://mern-stack-backend-2zxg.onrender.com/api/prepareOrder",{
        _id:id
      })
      if(data){
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  }

  const deliverOrder = async(id)=>{
    try{
      const {data} = await axios.post("https://mern-stack-backend-2zxg.onrender.com/api/deliverOrder",{
        _id:id
      })
      if(data){
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  }

  const alertUser = async(user)=>{
    try{
      console.log(user) 
      const {data} = await axios.post("https://mern-stack-backend-2zxg.onrender.com/api/alertAll",{
        id:user
      })
      if(data){
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  }

  const alertAll = async()=>{
    try{
      const {data} = await axios.post("https://mern-stack-backend-2zxg.onrender.com/api/alertAll")
      if(data){
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="flex flex-col items-center flex-grow bg-gray-200 min-w-screen">
      <div className="flex flex-col gap-2 md:w-[90%] m-2 justify-center items-center min-h-[5rem] ">
      <h1 className="md:text-[1.2rem] text-[0.8rem]">Currently Online: {Object.keys(online).length}</h1>
      {user && user.email=="joeprathappj@gmail.com" && (
           <div className="flex flex-col items-center justify-center w-[100%] md:w-[60%] gap-2">
           {Object.keys(online).map((user)=>{
            console.log(online)
            console.log(user)
            console.log(online[user])
            return(
             <div key={user} className="flex flex-grow justify-evenly items-center gap-2 w-[100%] md:w-[60%]">
               <h1 className="md:text-[1.2rem]  relative text-[0.8rem]">{online[user]!="" ? online[user] : user }
               <div className="absolute -right-2 animate-pulse top-0 min-h-[0.6rem] shadow-sm shadow-green-400 min-w-[0.6rem] rounded-[100%] bg-green-500"/>
               </h1>
               <button onClick={()=>{alertUser(user)}} className="p-2 text-white bg-green-500 rounded-md shadow-md">Notify</button>
             </div>
           )})}
            <button onClick={()=>{alertAll()}} className="p-2 text-white bg-green-500 rounded-md shadow-md">Alert All</button>
         </div>
      )}
   
      </div>
      {ready.status && (
           <div className="bg-green-200 w-[90%] p-2 m-2 animate-pulse rounded-md outline outline-2 outline-green-500">
           <h1 className="md:text-[1.3rem] text-[0.8rem] font-semibold text-green-700">Order id: {ready.id} ready</h1>
         </div>
      )}
   
      <h1>Orders</h1>
      <div className="flex bg-gradient-to-tr flex-wrap from-blue-500  md:min-h-[12rem]  to-blue-200 p-4 shadow-md rounded-md w-[90%] gap-2 ">
       {isLoading?(
        <div className="flex items-center justify-center p-2 md:p-4 flex-grow  rounded-[100%]">
            <div>
    <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
        </div>
       ):  orders.map((order,idx) => {
        return (
          order.status !== "ready" && (
              <div
              className="bg-white/[40%] shadow-md rounded-md backdrop-blur-md flex-col flex justify-center items-center p-2 md:p-4 min-h-[6rem] text-[0.5rem] transition-all md:text-[1rem] md:min-h-[12rem] "
              key={`${order._id}-${Date.now()}`}
            >
              <h1 key={`${order._id}-${Date.now()}`}>{order._id}</h1>
              <h1
                className={`${
                  order.status == "ready"
                    ? "text-green-500 font-semibold duration-75 animate-pulse"
                    : "text-red-500 font-bold"
                }`}
                key={`${order._id}-${Date.now()}`}
              >
                {order.status}
              </h1>
            </div>
          ) 
  
        );
      })}
      </div>

      <h1>Orders - Ready</h1>
      <div className="flex bg-gradient-to-tr flex-wrap from-green-500 to-blue-200 p-4 md:min-h-[12rem] shadow-md rounded-md w-[90%] gap-2 ">
      {isLoading?(
        <div className="flex items-center justify-center p-2 md:p-4 flex-grow  rounded-[100%]">
            <div>
    <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
        </div>
       ):
        orders.map((order,idx) => {
          return (
            order.status == "ready" && (
              <div
                className="bg-white/[50%] rounded-md backdrop-blur-sm flex-col flex justify-center items-center p-2 md:p-4 min-h-[6rem] text-[0.5rem] md:text-[1rem] md:min-h-[12rem]"
                key={`${order._id}-${Date.now()}`}
              >
                <h1 key={`${order._id}-${Date.now()}`}>{order._id}</h1>
                <h1
                  className={`${
                    order.status == "ready"
                      ? "text-green-500 font-semibold duration-75 animate-pulse"
                      : "text-red-500 font-bold"
                  }`}
                  key={`${order._id}-${Date.now()}`}
                >
                  {order.status}
                </h1>
              </div>
            )
          );
        })}
      </div>

      <div className=" mb-10 mt-10 w-[90%] p-2 gap-2 flex flex-col rounded-md shadow-md bg-gradient-to-tr from-yellow-200 to-slate-200">
      {user && (<button onClick={()=>{addOrder()}} className="p-2 mt-5 text-white bg-green-500 rounded-md shadow-md">Add Order</button>)}
        {user ?(
          
             orders.map((order)=>{
               return(
                 <div key={order._id} className="flex items-center gap-4 p-2 bg-white/[40%] rounded-md shadow-md backdrop-blur-md">
                   <h1>${order._id}</h1>
                   <div className="flex justify-end flex-grow gap-2 ">
                   <button onClick={()=>{prepareOrder(order._id)}} disabled={order.status=="ready"?true:false} className="p-2 active:scale-90 disabled:active:scale-100 transition-all md:text-[1rem] text-[0.8rem] font-semibold text-white bg-green-500 rounded-full shadow-md disabled:bg-green-300">Ready</button>
                   <button onClick={()=>{deliverOrder(order._id)}} className="p-2 font-semibold text-white bg-red-500 md:text-[1rem] transition-all disabled:active:scale-100 active:scale-90 text-[0.8rem] rounded-full shadow-md">Delete</button>
                   </div>
                 </div>
               )
             })
    
        ):(
          <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-lg font-semibold md:text-2xl animate-pulse">Login to see and place orders</h1></div>)
  }
           <div className="flex flex-col gap-2 mt-5">
              <div className="text-[1.6rem] relative w-max   font semibold">
               <div className=" animate-pulse absolute top-2 -right-2  min-h-[0.6rem] shadow-sm shadow-green-400 min-w-[0.6rem] w-[0.6rem] h-[0.6rem] rounded-[100%] bg-green-500"/>
                <h1>
                Live Chatrooom
                  </h1>
                </div>
            <div id={"chat"} className="flex flex-col flex-grow overflow-scroll ">
              <div className="w-full bg-white/[60%] overflow-scroll flex flex-col gap-2 p-2 backdrop-blur-sm h-[30rem] rounded-md shadow-md">
                {chats?.map((chat) => {
                  console.log(chats)
                  return (
                    console.log(chat),
                    chat?.id === socket?.id ? (
                      <div className="flex justify-end w-ful" key={chat.id}>
                        <h1 className="w-max min-w-[12rem] max-w-[8rem] text-white text-wrap p-2 rounded-lg bg-blue-400">{chat.message}</h1>
                      </div>
                    ) : (
                      <div className="flex flex-col w-full " key={chat.id}>
                        <div className="flex flex-col bg-green-500 rounded-lg shadow-md backdrop-blur-sm w-max">
                        <div className="bg-gradient-to-tr rounded-t-lg from-white-600 to-violet-200 min-w-[8rem] p-2 ">
                          <h1 className="text-[0.8rem] font-semibold">{online[chat.id] ? online[chat.id] : chat.id}</h1>
                
                        </div>
                        <h1 className="w-max max-w-[12rem] min-w-[8rem] text-wrap text-white p-2 ">{chat.message}</h1>
                        {console.log(chat.message.split(" "))}
                        {chat.message.toLowerCase().split(" ").includes("codeword") && (
                          <div className="overflow-hidden bg-red-500 rounded-b-lg">

                            <img src="https://media.tenor.com/NkfNBoWQnBMAAAAM/superstarksa-po-po.gif" alt="" />
                          </div>
                        )}
                        </div>
                        
                      </div>
                    )
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
              <div className="flex pt-2">
                <input onKeyDown={(e)=>{
                  if(send && e.key=="Enter"){
                    // Chat()
                    document.getElementById("chatbtn").click()
                  }
                }} type="text"   value={newChat} onChange={(e)=>{setNewChat(e.target.value)}} className="w-full p-2 " name="" id="" />
                <button id={"chatbtn"}  onClick={()=>{Chat()}} className="p-2 text-white bg-green-500">SEND</button>
              </div>
              <div className="justify-center items-center w-[100%]  gap-2 flex p-2">
                <h1 className="text-center">Enter is Send</h1>
                <input onChange={(e)=>{setSend(e.target.checked)}} className="" type="checkbox" name="" id="" />
              </div>
            </div>
             </div>

             {/* <div className="flex flex-grow bg-white min-h-[20rem] min-w-[100%]">
              <Map
              initialViewState={{
                latitude: 11.101746050449977,
                longitude: 76.9657515678348,
                
                zoom: 16
              }}
              style={{width: "100%", height: "500"}}
              mapboxAccessToken={TOKEN}
              mapStyle={"mapbox://styles/prathap2k3/clr7dimiv01je01o36od0gfgj"}
              transitionDuration="200"
              >
                <Marker latitude={11.101746050449977} longitude={76.9657515678348} color="red" />
              </Map>
             </div> */}
           </div>
          
     
    
    </div>
  );
}

export default Orders;
