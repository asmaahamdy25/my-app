import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={12} xs={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
