import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export default function Home() {
		return(
			<Container fluid>
				<Row className="justify-content-sm-center p-5">
					<Col lg="auto" sm="auto" className="text-center">
						<h1>Hello Travel Buddies!!</h1>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Image src="images/girl-train.gif" alt="girl riding train" roundedCircle fluid />
					</Col>
				</Row>
				<Row className="justify-content-md-center p-5">
					<Col sm="auto" md="auto">
						<Card style={{ width: 'auto' }} bg="light" border="primary">
						<Card.Body>
							<Card.Title className="text-center">Check out my adventures!</Card.Title>
							<Card.Text>
								I LOVEEE traveling, but I also love just sharing my adventures with others too!
								2023 was the first time I went to Japan and Korea and I loved it! 
								So I want to share with you all a blog of these adventures!<br></br><br></br>
								Below, you can access my trips to the countries I've been to or my daily posts!
								If you have any questions about my trips or any other travel reccomendations,
								swing by the about page and contact me! Thanks for being here!!
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
					<Col sm="auto" className="text-center p-3">
						<Card style={{ width: '18rem' }} bg="light" border="primary">
						<Card.Img 
							variant="top" 
							src="images/bears-driving.gif" alt="cartoon-bears-driving" 
							style={{ width: '18rem', height: '12rem' }} 
						/>
						<Card.Body>
							<Card.Title>My Posts!</Card.Title>
							<Card.Text>
							See the running list of me running around these countries!
							</Card.Text>
							<Card.Link as={Link} to="/posts">
								<Button variant="warning">Let's Go!</Button>
							</Card.Link>
						</Card.Body>
						</Card>
					</Col>
				</Row>
				</Container>
			
		) 
}


