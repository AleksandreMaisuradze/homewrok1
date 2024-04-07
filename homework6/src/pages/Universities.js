import React, { useState, useEffect } from "react";

function Universities() {
    const [universityData, setUniversityData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=Georgia`)
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
    }, [])

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
                <div key={universities.name} data={universities}>{universities.name}</div>
            )}
        </div>
    )
}

export default Universities;
