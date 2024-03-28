import { users } from "../constants/constant";
import "../reset.css"

export default function User({ setShowRest }) {
    const firstFive = users.slice(0, 5);
    function next() {
        setShowRest(true)
    }
    return (
        <div className="userDiv">
            {firstFive.map((user, index) => (
                <div key={index} className="user">
                    <h1>Full name: {user.name.title} {user.name.first} {user.name.last}</h1>
                    <img src={user.picture.thumbnail} alt="thumbnail"></img>
                    <p>Gender: {user.gender}</p>
                    <p>Age: {user.dob.age}</p>
                    <p>country: {user.location.country}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}

            <button className="next" onClick={next}>Next 5</button>
        </div>
    )

}