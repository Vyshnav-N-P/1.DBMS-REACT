import { useEffect, useState } from "react";
import axios from "axios";

const users = ()=>{
    const [users,setUsers]=useState();

    useEffect(()=>{
        let isMounted=true;
        const controller =new AbortController();

        const getUsers=async ()=>{
            try{
                const response = await axios.get('/users',{signal:controller.signal});
                console.log(response.data);
                isMounted && setUsers(response.data);
            }
            catch(err){
                console.log(err);
            }
            getUsers();
            return ()=>{
                            isMounted=false;
                            controller.abort();
                        }
        };
    },[])
    return (
            <article>
                <h2>Users list</h2>
                {users?.length ?(
                    <ul>
                        {users.map((user,i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ):<p>no Users to display</p>
                }
            </article>
        )
}

export default users;