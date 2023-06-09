import React, {useEffect, useState} from "react";
import * as userService from "../../services/UserService";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "../pages.css";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        reloadUsers();
    }, [])

    const reloadUsers = async () => {
        try {
            const users = await userService.index();
            setUsers(users);
        } catch (error) {
            setUserError(error);
            console.error(error);
        }
    }

    const onAdd = () => {
        navigate("/user-form");
    }

    const toShow = (id) => {
        navigate("/user-show", {replace: false, state: id});
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <button className="btn btn-outline-primary" onClick={onAdd}>Add</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {
                            userError
                                ? (<div><h2>Something is wrong, notify your System Administrator</h2></div>)
                                : users.map(u => (
                                    <div className="col-md-3 p-2" key={u.id}>
                                        <div className="card onHoverColor pointer" onDoubleClick={() => toShow(u.id)}>
                                            <div className="card-header"></div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <img
                                                            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                                                            alt="Avatar"
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <p>{u.id}</p>
                                                        <p>{u.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <p>{u.createdAt ? "Created at " + moment(u.createdAt).fromNow() : "There is no date record in the database"}</p>
                                                <p>{u.updatedAt ? "Updated at " + moment(u.updatedAt).fromNow() : "There is no date record in the database"}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}