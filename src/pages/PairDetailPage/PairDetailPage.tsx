import { useParams } from "react-router-dom";


const PairDetailPage = () => {
    const { pair } = useParams<{ pair: string }>();
    console.log(pair);

    return (
        <div>PairDetailPage</div>
    );
};

export default PairDetailPage;
