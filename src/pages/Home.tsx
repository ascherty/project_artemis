import homeImage from "../assets/home.jpg";
import PageTemplate from "../components/PageTemplate.tsx";

function Home() {
    return (
        <PageTemplate
            title="Welcome to the Future of Innovation"
            subTitle="We are a leading company in digital technologies, AI, and software development. Our mission is to drive progress through cutting-edge solutions, empowering businesses worldwide."
            image={homeImage}
            altText="Home"
        >
            <div>
                <p>
                    We are a leading company in digital technologies, AI, and software development.
                    Our mission is to drive progress through cutting-edge solutions, empowering businesses worldwide.
                </p>
                <p>
                    Explore our expertise in artificial intelligence, cloud computing, and advanced IT services.
                    Join us in shaping the future with groundbreaking innovations and transformative solutions.
                </p>
            </div>
        </PageTemplate>
    );
}

export default Home;

