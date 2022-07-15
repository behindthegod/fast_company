import React, {useState} from "react";
import api from "./api";
import Users from "./components/Users";



function App() {
    const getUsersApi = api.users.fetchAll();
    const [users, setUsers] = useState(getUsersApi);
    let lengthUsers = users.length;

    const handleDeleteUser = (userId) => {
        const newUsers = [...users];
        setUsers(newUsers.filter((user) => user._id !== userId));
    }
    const handleToggleBookMark = (id,bookmark) => {
        const newUsers = [...users];
        setUsers(newUsers.map(el => (el._id === id && el.bookmark === bookmark)
            ? {...el, bookmark: !el.bookmark}
            : el))
    }

    return (
        <>
            <Users users={users}
                   length={lengthUsers}
                   handleDeleteUser={handleDeleteUser}
                   handleToggleBookMark={handleToggleBookMark}/></>
    )
}

export default App;