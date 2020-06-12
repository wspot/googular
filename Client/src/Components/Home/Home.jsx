import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from './../Card/Card';

const searchTopics = [
    { title: 'Installing third parties', id: 1 },
    { title: 'Routing', id: 2 },
    { title: 'Setup', id: 3 },
    { title: 'Angular cli', id: 4 },
    { title: 'Components & templates', id: 5 },
    { title: 'Http', id: 6 },
];

function Home() {
    const serverAddress = "http://localhost:1337/api/getfilteredSearch";
    const [state, setState] = useState([]);

    useEffect(() => {
        fetchSearchResults().then(res => res.json())
            .then(({ result }) => {
                setState(result);
            });
    }, []);

    const fetchSearchResults = (topicsArray = []) => {
        return fetch(serverAddress, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topics: topicsArray
            })
        })
    }

    const handleChange = (e, val) => {
        let topicIds = val.map((item) => { return item.id });
        fetchSearchResults(topicIds).then(res => res.json())
            .then(({ result }) => {
                setState(result);
            });
    }

    const handleDelete = (itemId) => {
        let newState = state.filter(item => item._id !== itemId);
        setState(newState);
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center display-4  mt-5"> Googular </h1>
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-6 mt-4">
                        <Autocomplete
                            multiple
                            freeSolo
                            fullWidth
                            options={searchTopics}
                            onChange={handleChange}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) =>
                                <TextField {...params} label="Search here ..." variant="outlined" />}
                        />
                    </div>
                </div>
                <div className="row mt-3 justify-content-center ">
                    <div className="col-sm-12 col-md-10 bg-light border border-light rounded shadow p-3 ">
                        <h5 className="text-center ">Search Results</h5>
                        <div className="row">
                            {
                                state.map((item, index) => {
                                    return <Card data={item} onDelete={handleDelete} key={item._id} />;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;