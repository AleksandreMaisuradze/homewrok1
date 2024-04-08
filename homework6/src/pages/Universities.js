import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import UniversitiesByCountry from "../components/UniversitiesByCounty";

function Universities() {
    const [universityData, setUniversityData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const { universities } = useParams();

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${universities}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("ERROR")
            }).then((data) => {
                setUniversityData(data);
            }).catch((err) => {
                setError(err.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [universities])

    if (error) {
        return (
            <h1>Error</h1>
        )
    }

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="universities">
            {universityData.map((universities) =>
                <UniversitiesByCountry key={universities.name} data={universities} />
            )}
        </div>
    )
}

export default Universities;
