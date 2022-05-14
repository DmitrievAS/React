import {Title} from "@mui/icons-material";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div className="userProfile">
            <Title>Home</Title>
            <div>
                <div>
                    <Link to="/login">Sign in</Link>
                </div>
                <div>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>

    );
};

export default Home