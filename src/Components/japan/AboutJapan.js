import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export default function AboutJapan() {
		return(
			<Container fluid>
				<Row className="justify-content-sm-center p-5">
					<Col lg="auto" sm="auto" className="text-center">
						<h1>⛩Ohayo Gozaimus! Welcome to Japan!🎌</h1>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Image src="images/sushi.gif" alt="cute sushi dancing" roundedCircle fluid />
					</Col>
				</Row>
				<Row className="justify-content-md-center p-5">
					<Col sm="auto" md="auto">
						<Card style={{ width: 'auto' }} bg="light" border="primary">
						<Card.Body>
							<Card.Title className="text-center">Let's Explore Japan!!</Card.Title>
							<Card.Text>
                            Japan is a whimsical wonderland, where ancient traditions pirouette gracefully alongside the cutting-edge bustle of modern life. 
                            Tokyo, a city that never sleeps, dazzles with its neon-lit streets and skyscrapers that reach for the stars, a techno-utopia where tradition meets innovation. 
                            Wander through Shinto shrines adorned with vermillion torii gates, transporting you to a realm where time seems to stand still amidst the bustling cityscape. 
                            Cherry blossoms cascade like confetti in spring, painting parks and riverbanks in delicate shades of pink, while in winter, snow blankets ancient temples and misty mountains, 
                            evoking a serene beauty that whispers tales of old. From the serene elegance of Kyoto's historic geisha district to the futuristic bullet trains whisking passengers through emerald-green countryside, Japan is a kaleidoscope of captivating contrasts waiting to be explored.
							</Card.Text>
							<Card.Text className="text-center">
                                🥰 Love, Z✈️
							</Card.Text>
						</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className="justify-content-sm-center">
					<Col sm="auto" className="text-center p-3">
                        <Card style={{ width: '18rem' }} bg="light" border="primary">
                            <Card.Img 
                                variant="top" 
                                src="images/japanese-flag.gif" alt="japan flag" 
                                style={{ width: '18rem', height: '12rem' }} 
                            />
                            <Card.Body>
                                <Card.Title>Japan</Card.Title>
                                <Card.Text>
                                Check out my adventures in the "Land of the Rising Sun"
                                </Card.Text>
                                <Card.Link as={Link} to="/homeJapan">
                                    <Button variant="warning">Let's Go!</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
					</Col>
				</Row>
				</Container>
			
		) 
}


