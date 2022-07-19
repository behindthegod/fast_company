import React from "react";
import BookMark from "./BookMark";
import Qualitie from "./Qualitie";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onToggleBookMark,
    onDeleteUser,
    bookmark
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((el) => (
                    <Qualitie key={el._id} {...el} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <button onClick={() => onToggleBookMark(_id, bookmark)}>
                    <BookMark status={bookmark} />
                </button>
            </td>
            <td>
                <button
                    className="badge bg-danger"
                    onClick={() => onDeleteUser(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDeleteUser: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired
};

export default User;
