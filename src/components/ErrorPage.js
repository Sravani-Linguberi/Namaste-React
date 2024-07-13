import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1> OPPS !!</h1>
            <h2>Something went wrong {err.status} : {err.statusText} </h2>
        </div>
    )
}

export default ErrorPage;