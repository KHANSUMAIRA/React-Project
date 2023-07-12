import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Signup(){
 
  return (
  
  
  
<div className="container d-flex mt-5  bg-primary">
<h1 className='text-center fw-bold' >signup</h1>
    <div className="childcontainer mt-3 ">
    <Form>
    <Form.Group className='ms-4  btn btn-dark'controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      
      </Form.Text>
    </Form.Group>

    <Form.Group className='ms-4  btn btn-dark' controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-4" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button className='ms-4  btn btn-dark' type="submit">
      Submit
    </Button>
  </Form>
    </div>

  
    </div>
  

  )
}


