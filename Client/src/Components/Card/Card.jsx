import React from 'react';
import { Link } from "react-router-dom";


function Card({ data, onDelete }) {

    return (
        <div className="col-xs-12 col-sm-12 col-md-4 mt-2">
            <div className="card shadow rounded-0">
                <div className="card-body">
                    <button type="button" className="close" aria-label="Close" onClick={() => { onDelete(data._id) }} >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">{data.title} </h5>
                    <p className="card-text">{data.description}</p>
                    <Link className="card-link" to={data.redirectionLink}>Read more </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;