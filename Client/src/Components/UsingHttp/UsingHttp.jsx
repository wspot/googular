import React from 'react';
import { Link } from "react-router-dom";


function UsingHttp() {

    let item = 'import {HttpClient} from \'@angular/common/http\'';

    return (
        <div className="container">
            <div className="row  mt-5 justify-content-center ">
                <div className="col-sm-6 bg-dark text-white border border-light rounded shadow p-3 ">
                    <h5 className="text-center ">Using http </h5>
                    <div className="row">
                        <ul>
                            <li>import http client : <br />
                                <code>{item} </code>
                            </li>
                            <li>inject it in your component constructor : <br />
                                <code> constructor(private http: HttpClient) </code>
                            </li>
                            <li>make your http calls : <br />
                                <code> this.http.get(this.configUrl); </code>
                            </li>
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

export default UsingHttp;