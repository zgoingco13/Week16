import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function Contact() {
	
		return(
			<Container fluid>
				<Row className="justify-content-sm-center pt-5">
					<Col md="auto" className="text-center">
						<h1>About Us, You....... ME??</h1>
						<p>(jk, it's just about me)</p>
					</Col>
				</Row>
				<Row className="justify-content-sm-center p-3">
					<Col md="auto">
						<Image src="images/girl-riding-luggage.gif" alt="girl riding luggage" 
						fluid rounded
						style={{ width: '50rem'}} />
					</Col>
				</Row>
				<Row className="justify-content-sm-center mt-5 mb-1">
					<Col sm="auto">
						<div>
							<p>
								Hello! I'm always looking for traveling recommendations,
								new city, country, or even restaurant! 
								Let me know where I should go next or leave any suggestions!
								I would love to hear back from y'all!!
								Please leave your comment below along with your name and email so we can plan!
								You can also follow me on my socials linked below!
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm="auto" className="justify-content-sm-left">
						<Form  style={{ width: '50rem' }}>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Email address:</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Comment:</Form.Label>
								<Form.Control as="textarea" rows={5} />
							</Form.Group>
							<Button>Submit</Button>
						</Form>
					</Col>
					<Col sm="auto" className="justify-content-sm-right ms-4 mt-3">
						<Image src="images/travel-time-bear.gif" alt="bear running on Earth with words travel time" 
						rounded
						style={{ width: '250px'}} />
					</Col>
				</Row>
				<Row className="justify-content-sm-center mt-5 mb-1">
					<Col md="auto" className="text-center">
						<div>
							<h6>Socially awkward ways to contact me! </h6>
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center p-1">
					<Col xs="auto" className="text-center">
						<a 
							href="https://www.instagram.com/redbulladventure/?hl=en"
							target="_blank" 
								rel="noopener noreferrer"
							>
							<Image 
								src="images/ig-logo.png" 
								alt="Instagram logo"
								style={{ width: '2rem' }} 
							/>
						</a>
					</Col>
					<Col xs="auto" className="text-center">
						<a 
							href="https://www.snapchat.com/add/redbull?locale=en-US"
							target="_blank" 
								rel="noopener noreferrer"
							>
							<Image 
								src="images/sc-logo.png" 
								alt="Snapchat logo"
								style={{ width: '2rem' }} 
							/>
						</a>
					</Col>
					<Col xs="auto" className="text-center">
						<a 
							href="https://www.facebook.com/groups/ladiesclimbingcoalition/"
							target="_blank" 
								rel="noopener noreferrer"
							>
							<Image 
								src="images/fb-logo.png" 
								alt="Facebook logo"
								style={{ width: '2rem' }} 
							/>
						</a>
					</Col>
					<Col xs="auto" className="text-center">
						<a 
							href="https://twitter.com/i/flow/login?redirect_after_login=%2FRedBullXAlps"
							target="_blank" 
								rel="noopener noreferrer"
							>
							<Image 
								src="images/x-logo.png" 
								alt="Twitter logo"
								style={{ width: '2rem' }} 
							/>
						</a>
					</Col>
					<Col xs="auto" className="text-center">
						<a 
							href="https://www.linkedin.com/company/red-bull"
							target="_blank" 
								rel="noopener noreferrer"
							>
							<Image 
								src="images/linkedin-logo.png" 
								alt="LinkedIn logo"
								style={{ width: '2rem' }} 
							/>
						</a>
					</Col>
				</Row>
			</Container>
			

		)
}


