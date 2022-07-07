import React, {useState} from "react";
import api from "../api";
import {Emptiness} from "./Emptiness";


const Users = () => {
    const getUsersApi = api.users.fetchAll();
    const [users, setUsers] = useState(getUsersApi);
    let lengthUsers = users.length;

    const handleDeleteUser = (userId) => {
        const newUsers = [...users];
        const index = users.findIndex((user)=> user._id === userId);
        newUsers.splice(index, 1);
        setUsers(newUsers);
    }
    //удаление юзеров.

    const amountMan = (number) => {
        if (number >= 20) {
            let digitArr = String(number).split('');
            let n = Number(digitArr[digitArr.length - 1]);
            return n === 2 || n === 3 || n === 4 ? 'человека' : "человек";
        } else {
            return number === 2 || number === 3 || number === 4 ? 'человека' : 'человек';
        }
    }
    //изменение окончания в зависимости от числителя.

    if (users.length === 0) {
        return <Emptiness />
    }

    return (
        <>
            <h2 className='badge bg-primary'>{`С тобой готовы затусить ${lengthUsers} ${amountMan(lengthUsers)}`}</h2>
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
                {users.map((user)=> (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.qualities.map(el => <span className={'badge bg-' + el.color} key={el._id}>{el.name}</span>)}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}</td>
                        <button className='badge bg-danger' onClick={handleDeleteUser}>delete</button>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Users;