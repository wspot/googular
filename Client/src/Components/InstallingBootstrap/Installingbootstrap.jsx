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
                            <li>go to the project root folder : </li>
                            <li>run this command : npm install bootstrap </li>
                            <li>modify your angular.json like this : <br /> <code>"styles": [
                            "src/styles.css",
                                    "node_modules/bootstrap/dist/css/bootstrap.min.css"]   </code> </li>
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