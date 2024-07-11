import React,{useEffect, useState} from "react";
import axios from "axios";
import './ListUser.scss';

const ListUser = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                console.log(res.data.data);
                setUserList(res.data.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []); // Empty dependency array to run only once

    return(
        <div className="list-user-container">
            <div>Hello List user</div>
            <div className="list-user-content">
                {userList.map(user =>(
                    <li className="child" key={user.id}>
                        {user.email + ' - '+user.first_name + ' ' + user.last_name}
                    </li>
                ))}
            </div>
        </div>
       

    )
}
export default ListUser;