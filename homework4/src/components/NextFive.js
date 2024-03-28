import { users } from "../constants/constant";

export default function NextFive() {
    const restFive = users.slice(5)

    return (
        <div className="userDiv">
            {restFive.map((user, index) => (
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
        </div>
    )

}