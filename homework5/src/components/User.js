import React from "react";

export default function User({ data }) {
    return (
        <div className="userDiv">
            <h1>{data.name.title} {data.name.first} {data.name.last}</h1>
            <h3>{data.gender}</h3>
            <h3>{data.location.country}</h3>
            <img src={data.picture.medium}></img>
        </div>
    )

}