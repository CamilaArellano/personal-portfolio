export const Projects = () => {
        const projects = [
            {
                title: "GAME",
                description: "This is a game",
                imgUrl: projImg1,
            },
            {
                title: "GAME 2",
                description: "This is a game",
                imgUrl: projImg2,
            },
            {
                title: "GAME 3",
                description: "This is a game",
                imgUrl: projImg3,
            },
            {
                title: "GAME",
                description: "This is a game",
                imgUrl: projImg1,
            },
            {
                title: "GAME 2",
                description: "This is a game",
                imgUrl: projImg2,
            },
            {
                title: "GAME 3",
                description: "This is a game",
                imgUrl: projImg3,
            },
        ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum in elit in fringilla. Ut commodo, ex sit amet luctus iaculis, magna diam hendrerit lacus, quis pellentesque lectus velit a eros. Nunc laoreet a velit ac pretium. Nam elementum pretium arcu vitae gravida. Proin non rutrum ipsum, vitae scelerisque turpis. Ut vitae urna dapibus, facilisis nunc non, molestie mauris. Morbi interdum turpis vitae ipsum malesuada, at ornare tortor scelerisque. Morbi vel efficitur augue. Cras vitae orci ut libero auctor dignissim.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <p>{project.title}</p>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lore ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lore ipsum</Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}