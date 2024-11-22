import React from "react";
import './Result.css';

export default function Result({ message }) {
    return(
        <div className="reuslt-message">
            {message && <p>{message}</p>}
        </div>
    );
}