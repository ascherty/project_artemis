import homeImage from "../assets/home.jpg";
import PageTemplate from "../components/PageTemplate.tsx";
import Slider from 'react-slick';
import { Container, Typography, Box } from '@mui/material';

const images = [
    'https://source.unsplash.com/random/800x400?nature',
    'https://source.unsplash.com/random/800x400?city',
    'https://source.unsplash.com/random/800x400?technology',
];

function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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

            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Добро пожаловать!
                </Typography>

                <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
                    <Slider {...settings}>
                        {images.map((src, index) => (
                            <Box key={index}>
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    style={{ width: '100%', borderRadius: 8 }}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>

        </PageTemplate>
    );
}

export default Home;

