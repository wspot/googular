import React from 'react';

function Card({ data, onDelete }) {

    return (
        <div className="col-sm-4 mt-2">
            <div className="card shadow rounded-0">
                <div className="card-body">
                    <button type="button" className="close" aria-label="Close" onClick={() => { onDelete(data._id) }} >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">{data.title} </h5>
                    <p className="card-text">{data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;