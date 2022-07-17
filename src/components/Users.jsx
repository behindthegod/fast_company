import React from "react";
import User from "./User";


const Users = ({users, ...rest}) => {

    return (
        <>
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
                    <User key={user._id}
                          {...user}
                          {...rest}/>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Users;