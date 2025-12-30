import { Container, Navbar, Nav, Carousel, Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselInfo = [
    { title: 'Henderson Scholars Program', description: 'Being a Henderson Scholar at OU was a memorable experience.I learned how to be a part of a community and give back to the world.' },
    { title: 'Graduation (Bachelors)', description: 'I recently graduated in December 2025. Spent most of my life in school and now I have acheived a major milestone.' },
    { title: 'Mount Scott', description: 'I like traveling and hiking. This is one of my favorite places to go. The climb and the views are definitely a highlight of OKlahoma.' },
    { title: 'Plague City', description: 'This was my first game development project. It was a huge learning curve but a very fun journey.' },
    { title: 'Lake Day', description: 'First time learning to wakeboard (I did not make it up). Nonetheless had a blast with my boys.' },
    { title: 'Yamaha Fz6r', description: "Got my first bike. It's been fun to ride around." },
    { title: 'Army ',description: "I've spent a lot of time in the Army, and made great memories and close friends." },
  ];

  const handleSelectCarousel = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <div style={{backgroundImage: `url('${new URL('../images/space.jpg', import.meta.url).href}')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', minHeight: '100vh', paddingTop: '70px', paddingBottom: '40px'}}>
      {/* Toolbar */}
      <Navbar fixed="top" className="shadow-sm" style={{backgroundColor: '#FFFFFF', borderBottom: '2px solid #6B21A8'}}>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home" style={{color: '#111827', fontWeight: 600}}>Harivansh Luchmun</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Carousel with Side Cards */}
      <div style={{paddingTop: '30px', paddingBottom: '40px'}}>
        <Container>
          <Row style={{alignItems: 'center', gap: '20px'}}>
            {/**{/* Left Card *
            <Col md={2} style={{display: 'flex', justifyContent: 'center'}}>
              <Card style={{width: '100%', textAlign: 'center', backgroundColor: '#FFFFFF', border: '2px solid #4DB8E8'}}>
                <Card.Body>
                  <Card.Title style={{color: '#111827'}}>About</Card.Title>
                  <Card.Text style={{color: '#6B7280'}}>Add your description here</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            */}

            {/* Carousel */}
            <Col md={8}>
              <div style={{maxWidth: '100%', margin: '0 auto', backgroundColor: 'transparent', padding: '20px', borderRadius: '8px', border: 'none'}}>
                <Carousel fade interval={5000} controls={true} indicators={true} onSelect={handleSelectCarousel}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/HSP-picture.jpeg', import.meta.url).href}
                    alt="HSP Picture"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/d2561618-4191-4df0-9c59-cefd658018e8.JPG', import.meta.url).href}
                    alt="Photo 1"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/IMG_0681.JPG', import.meta.url).href}
                    alt="Photo 2"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/bants.png', import.meta.url).href}
                    alt="Bants"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/IMG_1067.JPG', import.meta.url).href}
                    alt="Photo 3"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/IMG_1557.PNG', import.meta.url).href}
                    alt="Photo 4"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={new URL('../images/Army-picture.jpeg', import.meta.url).href}
                    alt="Army Picture"
                    style={{maxHeight: '400px', objectFit: 'contain'}}
                  />
                </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            {/* Right Card - Dynamic */}
            <Col md={2} style={{display: 'flex', justifyContent: 'center'}}>
              <Card style={{width: '100%', textAlign: 'center', backgroundColor: '#000000', border: '2px solid #6B21A8'}}>
                <Card.Body>
                  <Card.Title style={{color: '#FFFFFF', fontWeight: 600}}>{carouselInfo[carouselIndex].title}</Card.Title>
                  <Card.Text style={{color: '#FFFFFF', fontSize: '0.9rem'}}>{carouselInfo[carouselIndex].description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Cards */}
      <Container style={{paddingBottom: '0'}}>
        <Row>
          <Col md={4}>
            <Card className="mb-4" id="about" style={{backgroundColor: '#000000', border: '2px solid #6B21A8', height: '100%'}}>
              <Card.Body>
                <Card.Title style={{color: '#FFFFFF', fontWeight: 600}}>About Me</Card.Title>
                <Card.Text style={{color: '#FFFFFF'}}>I am a Computer Science major at the University of Oklahoma. I enjoy programming and learning how things work, even apart from the computer science field. Currently, I am fascinated by physics, AI/ML, geology, and psychology. 
                  I enjoy working out, hanging out with my friends and family, and experiencing new things.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4" id="projects" style={{backgroundColor: '#000000', border: '2px solid #6B21A8', height: '100%'}}>
              <Card.Body>
                <Card.Title style={{color: '#FFFFFF', fontWeight: 600}}>Programming Projects</Card.Title>
                <Card.Text style={{color: '#FFFFFF'}}>You can find most of my programming projects on my <a href="https://github.com/harivanshL" target="_blank" rel="noopener noreferrer" style={{color: '#60A5FA', textDecoration: 'none'}}>github</a>. I don't really post coursework unless required, but my other repositories include small applications, games, and trying new things.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4" id="contact" style={{backgroundColor: '#000000', border: '2px solid #6B21A8', height: '100%'}}>
              <Card.Body>
                <Card.Title style={{color: '#FFFFFF', fontWeight: 600}}>Contact</Card.Title>
                <Card.Text style={{color: '#FFFFFF'}}>If you are interested in reaching out, you can contact me via email at <a href="mailto:harivansh.luchmun-1@ou.edu" style={{color: '#60A5FA', textDecoration: 'none'}}>harivansh.luchmun-1@ou.edu</a> or connect with me on <a href="https://www.linkedin.com/in/harivansh-luchmun-4a538b29a/" target="_blank" rel="noopener noreferrer" style={{color: '#60A5FA', textDecoration: 'none'}}>LinkedIn</a>.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
