import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Rightbar.css"

const Rightbar = () => {
  return (
    <div className='right'>
      <div className='rightbg'>
        <div className='btngrp' >
          <button className='btnpass'>Buy Pass</button>
          <button className='btnconnect'>Connect Wallet</button>
        </div>

        <h1 className='epocheading'>EPOCH STAKING</h1>
        <Container className='cardcontainer' >
        <Row className='px-md-5 pt-3'>
          <Col md={6} sm={6} xs={6} >
            <div className='mycard'>
              <p className='cardtext'>PASS Price</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
          <Col md={6} sm={6} xs={6} >
          <div className='mycard'>
              <Row className='mb-3 px-5' >
                <Col className='cardtext'>APR</Col>
                <Col className='cardtext'>/</Col>
                <Col className='cardtext'>EPR</Col>
              </Row>
              <Row className='mb-3 px-5'>
                <Col className='cardprice'>3280%</Col>
                <Col className='cardprice'>3%</Col>
               
              </Row>

            </div>
          </Col>
        </Row>
        <Row className='px-md-5 pt-3'>
          <Col md={6} sm={6} xs={6} >
            <div className='mycard'>
              <p className='cardtext'>Market Cap</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
          <Col md={6} sm={6} xs={6} >
          <div className='mycard'>
              <p className='cardtext'>Total Value Locked</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
        </Row>
        <Row className='px-md-5 pt-3'>
          <Col md={6} sm={6} xs={6} >
            <div className='mycard'>
              <p className='cardtext'>Treasury Balance</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
          <Col md={6} sm={6} xs={6} >
          <div className='mycard'>
              <p className='cardtext'>PASS Supply</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
        </Row>
        <Row className='px-md-5 pt-3'>
          <Col md={6} sm={6} xs={6} >
            <div className='mycard'>
              <p className='cardtext'>Backing per PASS</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
          <Col md={6} sm={6} xs={6} >
          <div className='mycard'>
              <p className='cardtext'>Current Index</p>
              <p className='cardprice'>$1520.33</p>

            </div>
          </Col>
        </Row>
        </Container>

      </div>
     

    </div>
  )
}

export default Rightbar