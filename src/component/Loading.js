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
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png'/>
            </div>
        </div>
      </Row>
    </Container>
      
    </>
  )
}
