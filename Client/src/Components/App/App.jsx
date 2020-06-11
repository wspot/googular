import React, { useState, useEffect } from 'react';
import './App.css';
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


function App() {
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

  return (
    <>
      <div className="container">
        <h1 className="text-center display-4  mt-5"> Googular </h1>

        <div className="row justify-content-center">
          <div className="col-sm-6 mt-4">
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

          <div className="col-sm-8 bg-light border border-light rounded shadow p-3 ">
            <h5 className="text-center ">Popular searches</h5>
            <div className="row">
              {
                state.map((item, index) => {
                  return <Card data={item} key={index} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
