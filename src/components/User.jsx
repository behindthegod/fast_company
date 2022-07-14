import React from "react";

const User = ({user, handleDeleteUser}) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.qualities.map(el => <span className={'badge bg-' + el.color}
                                                key={el._id}>{el.name}</span>)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <button className='badge bg-danger' onClick={handleDeleteUser}>delete</button>
            </td>
        </tr>
    )
}

export default User;