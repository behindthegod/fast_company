import React, { useState } from "react";
import api from "./api";
import Users from "./components/Users";
import SearchStatus from "./components/SearchStatus";
import { Emptiness } from "./components/Emptiness";

function App() {
    const getUsersApi = api.users.fetchAll();
    const [users, setUsers] = useState(getUsersApi);
    const lengthUsers = users.length;

    const handleDeleteUser = (userId) => {
        const newUsers = [...users];
        setUsers(newUsers.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id, bookmark) => {
        const newUsers = [...users];
        setUsers(
            newUsers.map((el) =>
                el._id === id && el.bookmark === bookmark
                    ? { ...el, bookmark: !el.bookmark }
                    : el
            )
        );
    };

    if (users.length === 0) {
        return <Emptiness />;
    }
    return (
        <>
            <SearchStatus length={lengthUsers} />
            <Users
                users={users}
                length={lengthUsers}
                onDeleteUser={handleDeleteUser}
                onToggleBookMark={handleToggleBookMark}
            />
        </>
    );
}

export default App;
