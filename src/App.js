import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DataViewer from "./DataViewer";
function App() {
  const [data,setData] = useState()
  const [loaded,setLoaded] = useState(false)
  const [date,setDate] = useState(new Date().toISOString().split("T")[0])
  function fetchApod(curr) {
    setLoaded(false)
    axios.get("https://api.nasa.gov/planetary/apod?",
  {
    params : {
      api_key : "LmChnffl7besuGriVbhim20jxVgBmEKU4RRDRNJz",
      date: curr,
      thumbs: true,
    }
  })
    .then(function (response) {
      // handle success
      setData(response.data);
      setLoaded(true)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setLoaded(false)
    })
    .finally(function () {
      // always executed
    });
  }
  
  useEffect(() => {
  fetchApod(date);
   },[date]);

  return (
    <div className="App">
<input type="date" id="date" name="datePicker" onChange={(newValue) => setDate(newValue.target.value)} ></input>

  { loaded && ( <DataViewer data = {data} ></DataViewer>  )}   
    </div>
  );
}


export default App;
