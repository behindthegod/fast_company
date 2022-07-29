import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {

    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
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

    return (
        users && (
            <div>
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                />
            </div>
        )
    );
}

export default App;
