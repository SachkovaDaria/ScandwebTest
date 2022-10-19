import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div>
            <p>Sorry! That page doesn't exist.</p>
            <Link to='/'>Click here to return to Main page.</Link>
        </div>
    )
}

export default Page404;