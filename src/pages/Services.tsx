import servicesImage from "../assets/services.jpg";
import PageTemplate from "../components/PageTemplate.tsx";

function Services() {
    return <PageTemplate
        title="Our Services"
        subTitle="Software development, AI solutions, cloud services, and consulting."
        image={servicesImage}
        altText="Services" />;
}

export default Services;