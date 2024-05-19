import { useAppContext } from "../context/AppContextProvider"


function DontShow({ children }) {
    const { state } = useAppContext()
    
    if (!state.isUserLoggedIn) {

        return <>{children}</>
    } else {
        return (
            <p style={{ fontSize: "42px", fontWeight: "bold", textAlign: "center" }}>
                You have already logged in ore registered
            </p>
        )
    }

}

export default DontShow;