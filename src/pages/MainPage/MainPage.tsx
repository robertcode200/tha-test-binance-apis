import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <div>MainPage</div>
            <Link to="/pair/test123">
                <span>test123</span>
            </Link>
        </div>
    );
};

export default MainPage;
