import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 + Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting && updatedText === fullText) {
            setIsDeleting(false);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(true);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm webdecoded"}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum in elit in fringilla. Ut commodo, ex sit amet luctus iaculis, magna diam hendrerit lacus, quis pellentesque lectus velit a eros. Nunc laoreet a velit ac pretium. Nam elementum pretium arcu vitae gravida. Proin non rutrum ipsum, vitae scelerisque turpis. Ut vitae urna dapibus, facilisis nunc non, molestie mauris. Morbi interdum turpis vitae ipsum malesuada, at ornare tortor scelerisque. Morbi vel efficitur augue. Cras vitae orci ut libero auctor dignissim.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
