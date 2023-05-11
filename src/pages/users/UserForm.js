import React, {useState, useRef, useEffect} from "react";
import * as userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
    const [name, setName] = useState("");
    const nameFocus = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {nameFocus.current.focus();}, []);

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const toSave = async (event) => {
        event.preventDefault();

        try {
            await userService.postUser({name});
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    }

    const onBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="row p-2">
                <div className="col-md-4 px-4 py-2">
                    <button className="btn btn-outline-primary border pl-5" onClick={onBack}>&nbsp;&nbsp;Back&nbsp;&nbsp;</button>
                </div>
                <div className="col-md-4 p-2">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4 className="card-text">Add User</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-control-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={name}
                                        onChange={onChangeName}
                                        ref={nameFocus}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary rounded-circle btn-lg" onClick={toSave}>Save</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2"></div>
            </div>
        </>
    )
}