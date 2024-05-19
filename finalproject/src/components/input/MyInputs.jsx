import "./myinput.css"

function MyInputs({ data, setUser }) {

    const changeHandler = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div>
            <label htmlFor={data.name} className="registerLabel" >{data.label} :</label>
            <input onChange={changeHandler} name={data.name} placeholder={data.name} className="registerInput" />
        </div>
    )
}

export default MyInputs;