import React from "react";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

export default function Posts({}) {
    const posts = [
        {
          id: 10,
          title: 'My Tenth Post',
          date: '12/07/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        },
        {
          id: 9,
          title: 'Ninth Post',
          date: '8/24/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        },
        {
          id: 8,
          title: 'My Eighth Post',
          date: '10/02/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        },
        {
          id: 7,
          title: 'My Seventh Post',
          date: '10/02/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        },
        {
          id: 6,
          title: 'My Sixth Post',
          date: '10/02/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        },
        {
          id: 5,
          title: 'My Fifth Post',
          date: '10/02/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        },
        {
          id: 4,
          title: 'My Fourth Post',
          date: '10/05/2023',
          content: 'Hello World! Next stop, here I come.',
          image: process.env.PUBLIC_URL + '/images/girl-suitcase.gif',
          alt: 'girl skipping with suitcase'
        },
        {
          id: 3,
          title: 'My Third Post',
          date: '10/03/2023',
          content: 'This hotel is AH-MAZING!  Great food, great accommodations, and great service. Definitely coming back here!',
          image: process.env.PUBLIC_URL + '/images/frog-eating.gif',
          alt: 'Frog eating'
        },
        {
          id: 2,
          title: 'My Second Post',
          date: '10/02/2023',
          content: 'love traveling with my favorite bestie!',
          image: process.env.PUBLIC_URL + '/images/spongebob-patrick-traveling.gif',
          alt: 'spongebob and patrick traveling'
        },
        {
          id: 1,
          title: 'My First Post',
          date: '10/01/2023',
          content: 'traveling, yayyyy!',
          image: process.env.PUBLIC_URL + '/images/bunny-traveling.gif',
          alt: 'bunny dancing with suitcase and passport'
        }
      ];
    

    const match = useRouteMatch();
    const findPostById = (id) => 
      posts.filter((post) => post.id == id)[0];
  
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} md={10} lg={12}>
            <div>
              <h2>Posts</h2>
                {posts.map((post, index) => {       
                  return(
                    <Alert key={index} variant="warning" style={{ width: '100%' }}>
                      <Link to={`${match.url}/${post.id}`}>
                        {post.title}
                      </Link>
                    </Alert>
                  );
                })}
              <Switch>
                <Route
                  path={`${match.path}/:postId`}
                  render={(props) => (
                    <Post
                      {...props}
                      data={findPostById(props.match.params.postId)}
                    />
                  )}
                />
                <Route path={match.path}>
                  <h3>Please select a post.</h3>
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  function Post(props) {
    const { data } = props;
    return data == undefined ? <h1>404 Not Found</h1> : (
      //this is saying if typing in id that doesn't exist, 404 Not Found will appear (e.g 3 posts but you entered localhost:3000/posts/4)
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} md={10} lg={12}>
            <Card style={{ width: '100%' }} className="text-center">
              <Card.Header>{data.title}</Card.Header>
              <Card.Body>
                <Card.Subtitle>{data.date}</Card.Subtitle>
                <Card.Text>{data.content}</Card.Text>
                <Card.Img 
                  variant="top" 
                  style={{ width:'50%' }}
                  src={data.image} 
                  alt={data.alt} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    )
}