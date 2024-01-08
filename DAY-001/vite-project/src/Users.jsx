import axios from 'axios'
import { useEffect, useState } from 'react'

function Users() {
    const [users,setUsers] = useState("")
    
    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async()=>{
            try{
                const response = await axios.get("http:/localhost:5000/users",
                {signal:controller.signal
                })
                console.log(response.data)
                isMounted && setUsers(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUsers()

        return ()=>{
            isMounted = false;
            controller.abort()
        }
    },[])
  return (
    <div className='flex items-center justify-center flex-grow'>

        <h1>Users List</h1>
        {users?.length?(
            <ul>
            {users.map((user,i)=>{
                return(
                    <li key={`list-${i}`}>{user.name}</li>
                    )
                })}
            </ul>
        ):(
            <h1>No Users</h1>
        )}
    </div>
  )
}

export default Users