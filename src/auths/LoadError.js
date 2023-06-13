import React from "react";

export default function LoadError() {
    return (
        <div className="text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div><h3 className="text-danger">Load Error</h3></div>
            <button className="btn btn-outline-primary btn-lg" onClick={() => window.location.reload(false)}>
                Click here to reload when server is on-line
            </button>
        </div>
    )
}