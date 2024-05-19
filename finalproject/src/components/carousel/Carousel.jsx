import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css"

function HomeCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://movies.universalpictures.com/media/mobile-header-banner-5bf36da191eac-1-5d3788ce171d5-1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.moviege.com/movies/bg/normal/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;