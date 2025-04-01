import historyImage from "../assets/history.jpg";
import PageTemplate from "../components/PageTemplate.tsx";

function History() {
    return <PageTemplate
        title="Our History"
        subTitle="From a startup to a technology leader – our journey into the digital era."
        image={historyImage}
        altText="History" />;
}

export default History;