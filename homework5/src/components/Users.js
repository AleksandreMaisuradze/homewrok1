import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
    const [count, setCount] = useState(5)
    const [gender, setGender] = useState("")
    const [usersData, setUsersData] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${count}&gender=${gender}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("ERROR")
            }).then((data) => {
                setUsersData(data);
            }).catch((err) => {
                setError(err.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [gender, count])

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
        <div className="usersAndOptions">
            <div>
                <select value={gender} onChange={(e) => { setGender(e.target.value) }}>
                    <option value="">Selecet gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                </select>
                <button onClick={() => {
                    setCount(count + 1)
                }}>Add User</button>
            </div>
            <div className="usersDiv">
                {usersData.results?.map((user) => (
                    <User key={user.cell} data={user} />
                ))}
            </div>
        </div>
    )

}