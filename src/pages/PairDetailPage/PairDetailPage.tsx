import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const PairDetailPage = () => {
    const { pair } = useParams<{ pair: string }>();
    console.log(pair);

    return (
        
        <div>
            <div>PairDetailPage</div>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
};

export default PairDetailPage;
