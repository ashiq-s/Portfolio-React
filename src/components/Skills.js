import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Dedicated and interested in AI, ML and Full Stack development. As an ambitious developer, AI and
machine learning's limitless potential to change businesses and improve lives inspires me. I can research
AI and ML because of my academic background in computer languages, data analysis, and problemsolving. 
I like designing clever algorithms and leveraging data to make decisions. Full stack development
also intrigues me. I combine front-end and back-end technologies to create user-friendly experiences. 
I am also well versed in programming languages such as C/C++, Python, Java, JavaScript and I make use of JavaScript libraries to make well designed user interfaces for webpages. I am also well versed with backend frameworks such as NodeJS, ExpressJS.  I also handle databases using MySQL, Postgresql and MongoDB.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image" />
                                <h5>Competitive Programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />
                                <h5>Artificial Intelligence</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />
                                <h5>Data Science</h5>
                            </div>
                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}