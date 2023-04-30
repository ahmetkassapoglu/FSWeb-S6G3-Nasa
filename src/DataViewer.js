import React from "react";
function DataViewer (props){
const {data} = props
    return (
        <div>
           <p>{data.date} </p>
           <p>{data.title}</p>
        <img src= {data.hdurl} alt = {data.title} ></img>
        <p> {data.explanation}</p>
        </div>

    )

}
export default DataViewer