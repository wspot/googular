import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';

import Autocomplete from '@material-ui/lab/Autocomplete';


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 }
];

function App() {
  return (
    <>

      <div className="container">
        <h1 className="text-center display-4  mt-5"> Googular </h1>

        <div className="row justify-content-center">
          <div className="col-auto mt-4">
            <Autocomplete
              multiple
              fullWidth
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) =>
                <TextField {...params} label="Search here ..." variant="outlined" fullWidth />}
            />
          </div>
        </div>
        <div className="row mt-5 justify-content-center ">
          <div className="col-sm-8 bg-light p-3">
            <div className="row">

              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <button type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <button type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <button type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <button type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </>

  );
}

export default App;
