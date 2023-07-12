// import React, { useState } from 'react';
// import { Form, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//   };

//   return (
// <>

  
{/* 
// <Card className="text-start m-5">
//       <Form onSubmit={handleSubmit} className='m-5'>
//         <h2>LOGIN</h2>
//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control */}
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Login
//         </Button>

//         <p>
//           Don't have an account? <Link to="/signup">Sign up </Link>
//         </p>
//       </Form>
//     </Card>
    
//     <div className='container-fluid col-md-4 my-5 py-4 bg-warning'>
//  <h1 className='text-center fw-bold' >Login</h1>
//  <Form onSubmit={getInfo} >
//      <Form.Group className="mb-3" controlId="formBasicEmail">
//        <Form.Label>Email address</Form.Label>
//        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
//        <Form.Text className="text-muted">
//          We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group> 

// </div>

//     </div>
  
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
   const[email, setEmail]=useState("");
  const [password,setPassword]=useState("");
  
   const getInfo=(e)=> {
 e.preventDefault();
 const payload ={email,password}
 console.log(payload)
   }
//   const [state, dispatch] = useReducer(myCallback, initialData)
  return (
<>
  
<div className='container-fluid col-md-4 my-5 py-4 bg-primary'>
<h1 className='text-center fw-bold' >Login</h1>
<Form onSubmit={getInfo} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button className='ms-4  btn  btn-dark' type="submit">
        Submit
      </Button>

        
    </Form>
    </div>
</> 
  )
 }

export default Login; 