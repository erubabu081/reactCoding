import React, {useEffect, useState} from 'react'
import ENV_VARIABLES from '../../utils/env';

const UsersList = () => {
    const [usersList, setUsersList] = useState([]);
    
    useEffect(()=> {
        const usersListAPI = ENV_VARIABLES.usersListAPI
        const fetchUsersList = async () => {
           const  usersListAPIResp = await fetch(usersListAPI);
           const usersListAPIRespJson  = await usersListAPIResp.json();
           setUsersList(usersListAPIRespJson.users)
        }
        fetchUsersList();
    },[])
    const noPages = (usersList.length)/5;

    return (
        <>
        <div>Pages: {noPages}
            {[...Array(noPages).keys()].map((page)=>page)}
        </div>
        <div className='users-list-wrapper flex flex-wrap'>
            <div>Usres List</div>

            {
            (usersList.length>0) ?
            usersList.map((user)=> 
                <div className="user-record border p-2 m-2" key={user.id}>
                    <div><img src={user.image} alt='user-img'></img></div>
                    <div>Name:{user.firstName}</div>
                    <div>Age:{user.age}</div>
                </div>
            ): 
                <div className='no-users'>{"No users..."}</div>
            }

        </div>
        </>
        
    )

}


export default UsersList