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
        const response = await axios.get("http://localhost:5000/api/getOrders");
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

  return (
    <div className="flex flex-col items-center flex-grow bg-gray-200 md:justify-center min-w-screen">
      <h1>Orders</h1>
      <div className="flex bg-gradient-to-tr flex-wrap from-blue-500 to-blue-200 p-4 shadow-md rounded-md w-[90%] gap-2 ">
       {isLoading?(
        <div className="flex items-center justify-center p-1 bg-violet-400   rounded-[100%]">
            <dir  className="bg-white rounded-[100%] min-h-[100%] flex flex-grow shadow-md">
                
            </dir>
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
      <div className="flex bg-gradient-to-tr flex-wrap from-green-500 to-blue-200 p-4 shadow-md rounded-md w-[90%] gap-2 ">
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
    </div>
  );
}

export default Orders;
