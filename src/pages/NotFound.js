import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
            <h1>error 404: page not found</h1>
            <Link to={'/'}>Go home</Link>
        </>
    )
}