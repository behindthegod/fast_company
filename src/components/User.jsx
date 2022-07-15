import React from "react";
import BookMark from "./BookMark";

const User = ({user, handleDeleteUser, handleToggleBookMark, bookmark,id}) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.qualities.map(el => <span className={'badge bg-' + el.color}
                                                key={el._id}>{el.name}</span>)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td><button onClick={()=>handleToggleBookMark(id,bookmark)}><BookMark bookmark={bookmark}/></button></td>
            <td>
                <button className='badge bg-danger' onClick={() => handleDeleteUser(id)}>delete</button>
            </td>
        </tr>
    )
}

export default User;