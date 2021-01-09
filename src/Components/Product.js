import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' fluid='true'></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.category}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>{product.title}</Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
