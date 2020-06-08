import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from './../Card/Card';

let fetchedData = require('./../../data.json');


const searchTopics = [
  { title: 'Installing third parties', id: 1 },
  { title: 'Routing', id: 2 },
  { title: 'Setup', id: 3 },
  { title: 'Angular cli', id: 4 },
  { title: 'Components & templates', id: 5 },
  { title: 'Http', id: 6 },
];

function App() {

  const [state, setState] = useState(fetchedData.response);

  const handleChange = (e, val) => {
    if (val.length === 0) {
      setState(fetchedData.response);
    } else {
      let ids = val.map((item) => { return item.id });
      let result = state.filter((item) => { return compareArrays(item.topics, ids) });
      setState(result)
    }
  }

  const compareArrays = (topics, idArray) => {
    let result = false;
    topics.forEach(element => {
      if (idArray.includes(element)) {
        result = true;
      }
    });
    return result;
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
