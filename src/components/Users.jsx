import React, {useState} from "react";
import api from "../api";
import {Emptiness} from "./Emptiness";
import User from "./User";
import SearchStatus from "./SearchStatus";


const Users = () => {
    const getUsersApi = api.users.fetchAll();
    const [users, setUsers] = useState(getUsersApi);
    let lengthUsers = users.length;

    const handleDeleteUser = (userId) => {
        const newUsers = [...users];
        const index = users.findIndex((user) => user._id === userId);
        newUsers.splice(index, 1);
        setUsers(newUsers);
    }
    //удаление юзеров.
    

    if (users.length === 0) {
        return <Emptiness/>
    }

    return (
        <>
            <SearchStatus length={lengthUsers}/>
            <table>

                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Качества</th>
                    <th>Профессия</th>
                    <th>Встретился, раз</th>
                    <th>Оценка</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <User user={user} handleDeleteUser={handleDeleteUser}/>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Users;