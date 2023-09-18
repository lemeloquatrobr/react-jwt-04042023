import React, {useState, useRef, useEffect} from "react";
import * as expertiseService from "../../services/ExpertiseService";
import { useNavigate } from "react-router-dom";

export default function ExpertiseForm() {
    const [expertise, setExpertise] = useState("");
    const [expertiseInvalid, setExpertiseInvalid] = useState("");
    const expertiseFocus = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {expertiseFocus.current.focus();}, []);

    const onChangeExpertise = (event) => {
        setExpertiseInvalid("");
        setExpertise(event.target.value)
    }

    const toSave = async (event) => {
        event.preventDefault();

        if (!expertise) {
            setExpertiseInvalid("Insert a expertise");
        } else {
            try {
                const response = await expertiseService.store({expertise});
                if (response && response.sqlExecute) {
                    navigate(-1);
                } else {
                    console.error(response.sqlResponse);
                }
            } catch (error) {
                console.error(error);
            }
        }     
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            toSave(event);
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
                            <h4 className="card-text">Add Expertise</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="expertise" className="form-control-label">
                                        { expertiseInvalid ? <span className="text-danger">{ expertiseInvalid }</span> : "Expertise" }
                                    </label>
                                    <input
                                        type="text"
                                        id="expertise"
                                        className="form-control"
                                        value={expertise}
                                        onChange={onChangeExpertise}
                                        ref={expertiseFocus}
                                        onKeyDown={handleKeyDown}
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