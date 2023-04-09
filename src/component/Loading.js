import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Loading() {
  return (
    <>
     <Container fluid className='loading_container'>
      <Row>
        <div className='loading_box'>
            <div className='loading_logo_box'>
                <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png' alt='tweeter logo'/>
            </div>
        </div>
      </Row>
    </Container>
      
    </>
  )
}
