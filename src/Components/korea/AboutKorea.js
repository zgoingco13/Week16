import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export default function AboutKorea() {
		return(
			<Container fluid>
				<Row className="justify-content-sm-center p-5">
					<Col lg="auto" sm="auto" className="text-center">
						<h1>🇰🇷Annyeong! Welcome to Korea!🇰🇷</h1>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Image src="images/korean-drinks.gif" alt="banana and strawberry milk" roundedCircle fluid />
					</Col>
				</Row>
				<Row className="justify-content-md-center p-5">
					<Col sm="auto" md="auto">
						<Card style={{ width: 'auto' }} bg="light" border="primary">
						<Card.Body>
							<Card.Title className="text-center">Let's Explore Korea!!</Card.Title>
							<Card.Text>
                                Nestled amidst vibrant cherry blossom trees that paint the streets with delicate pink hues, Korea sparkles like a gem in the heart of East Asia. 
                                Seoul, its bustling capital, hums with energy as neon signs dance in the night sky, leading you through labyrinthine streets filled with K-Pop beats and tantalizing scents of sizzling street food. 
                                The air tingles with excitement, whether you're wandering through ancient palaces adorned with colorful roofs or navigating futuristic malls brimming with the latest gadgets. 
                                Venture beyond the cityscape to find rolling hills embroidered with terraced green tea fields and serene temples nestled in misty mountains, 
                                inviting you to discover the tranquil beauty that harmonizes with Korea's vibrant and lively spirit.
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
							src="images/korean-flag.gif" alt="korea flag"
							style={{ width: '18rem', height: '12rem' }} 
						/>
						<Card.Body>
							<Card.Title>Korea</Card.Title>
							<Card.Text>
							KPop! Kdramas! Check out my adventures in this fun country!
							</Card.Text>
							<Card.Link as={Link} to="/homeKorea">
								<Button variant="warning">Let's Go!</Button>
							</Card.Link>
						</Card.Body>
						</Card>
					</Col>
				</Row>
				</Container>
			
		) 
}


