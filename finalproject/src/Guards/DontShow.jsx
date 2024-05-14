import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContextProvider"
import appRoutes from "../constants/appRoutes"
import Button from 'react-bootstrap/Button';


function DontShow({ children }) {
    const { state } = useAppContext()
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(appRoutes.Registration)
    }

    const logInClickHandler = () => {
        navigate(appRoutes.LogIn)
    }


    if (!state.isUserLoggedIn) {

        return <>{children}</>
    } else {
        return (
            <div>
                <div className="logInDiv" >
                    <p>Please log in to see movies</p>
                    <Button variant="primary" className="registrationButton" onClick={logInClickHandler} >Log in</Button>

                </div>
                <div className="registerDiv" >
                    <p>If you don`t have account register </p>
                    <Button variant="primary" className="registrationButton" onClick={clickHandler} >Register Now</Button>
                </div>
            </div>
        )
    }

}

export default DontShow;