import React from "react";
import {Emptiness} from "./Emptiness";
import User from "./User";
import SearchStatus from "./SearchStatus";


const Users = ({users, handleDeleteUser, length, handleToggleBookMark}) => {

    if (users.length === 0) {
        return <Emptiness/>
    }
    return (
        <>
            <SearchStatus length={length}/>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Качества</th>
                    <th>Профессия</th>
                    <th>Встретился, раз</th>
                    <th>Оценка</th>
                    <th>Избранное</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <User user={user}
                          key={user._id}
                          bookmark={user.bookmark}
                          id={user._id}
                          handleDeleteUser={handleDeleteUser}
                          handleToggleBookMark={handleToggleBookMark}/>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Users;