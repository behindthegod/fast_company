import React, {useEffect, useState} from "react";
import User from "./User";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import GroupList from "./GroupList";
import api from "../api";

const Users = ({users, ...rest}) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, [])


    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleProfessionSelect = (params) => {
        console.log(params);
    };

    return (
        <>
            {professions && <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}
            />}
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
                    <User key={user._id} {...user} {...rest} />
                ))}
                </tbody>
            </table>

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
}
;

Users.propTypes =
{
    users: PropTypes.array.isRequired
};

export default Users;
