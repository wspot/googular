import React from 'react';
import { Link } from "react-router-dom";


function InstallingBootstrap() {

    return (
        <div className="container">
            <div className="row mt-5 justify-content-center ">
                <div className="col-sm-6 bg-dark text-white border border-light rounded shadow p-3 ">
                    <h5 className="text-center ">installing bootstrap</h5>
                    <div className="row">
                        <ul>
                            <li>install bootstrap </li>
                            <li>run commands</li>
                            <li> open browser </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-3 ">
                <div className="col-sm-2">
                    <Link to="/" className="btn btn-danger btn-block btn-outline rounded-0 shadow" >Back</Link>
                </div>
            </div>
        </div>
    )
}

export default InstallingBootstrap;