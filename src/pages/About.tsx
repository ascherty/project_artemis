import aboutImage from "../assets/about.jpg";
import PageTemplate from "../components/PageTemplate.tsx";

function About() {
    return (
        <PageTemplate
            title="About Us"
            subTitle="We develop innovative IT solutions, helping businesses grow."
            image={aboutImage}
            altText="About"
        />
    );
}

export default About;