import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Orders({socket}) {
  const [orders, setOrders] = useState([{ _id: "1" }]);
  const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
   
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
    socket.on("deliverOrder", async(id) => {
      setLoading(true)
      const updatedOrder = orders.filter((order) => {
        return order._id != id;
      });
      console.log(id);

      await fetchOrders()
      setLoading(false)
    
    });

    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://mern-stack-backend-2zxg.onrender.com/api/getOrders");
        if (response.data) {
          console.log(response.data);
          setOrders(response.data);
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
  
    };
  }, [socket]);

  const addOrder = async()=>{
    try{
      const {data} = axios.post("https://mern-stack-backend-2zxg.onrender.com/api/addOrder",{
        status:"cooking"
      })
  
      if(!data){
        console.log("ERROR")
      }
    } catch(err){
      console.log(err)}
  
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


  return (
    <div className="flex flex-col items-center flex-grow bg-gray-200 md:justify-center min-w-screen">
      <h1>Orders</h1>
      <div className="flex bg-gradient-to-tr flex-wrap from-blue-500  md:min-h-[12rem]  to-blue-200 p-4 shadow-md rounded-md w-[90%] gap-2 ">
       {isLoading?(
        <div className="flex items-center justify-center p-1 flex-grow  rounded-[100%]">
            <div>
              <h1>Loading...</h1>
            </div>
        </div>
       ):  orders.map((order,idx) => {
        return (
          order.status !== "ready" && (
              <div
              className="bg-white/[40%] shadow-md rounded-md backdrop-blur-md flex-col flex justify-center items-center p-2 md:p-4 min-h-[6rem] text-[0.5rem] transition-all md:text-[1rem] md:min-h-[12rem]"
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
        {orders.map((order,idx) => {
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

      <button onClick={()=>{addOrder()}} className="p-2 mt-5 text-white bg-green-500 rounded-md shadow-md">Add Order</button>
        <div className=" mb-10 mt-10 w-[90%] p-2 gap-2 flex flex-col rounded-md shadow-md bg-gradient-to-tr from-yellow-200 to-slate-200">
          {orders.map((order)=>{
            return(
              <div key={order._id} className="flex items-center gap-4 p-2 bg-white/[40%] rounded-md shadow-md backdrop-blur-md">
                <h1>${order._id}</h1>
                <div className="flex justify-end flex-grow gap-2 ">
                <button onClick={()=>{prepareOrder(order._id)}} disabled={order.status=="ready"?true:false} className="p-2 font-semibold text-white bg-green-500 rounded-full shadow-md disabled:bg-green-300">Ready</button>
                <button onClick={()=>{deliverOrder(order._id)}} className="p-2 font-semibold text-white bg-red-500 rounded-full shadow-md">Delete</button>
                </div>
              </div>
            )
          })}
        </div>
    
    </div>
  );
}

export default Orders;
