import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {
  return (
   <>
     
    <div className='py-1 width-100%'>
    <Carousel slide={false}>
    <Carousel.Item>
      <img className="d-block w-100 "
        src="https://media.istockphoto.com/id/1023612090/photo/interior-of-clothing-store.jpg?s=612x612&w=0&k=20&c=84NciWwU43Zyzmxph6bCVTG9WRO9rxDGUYtYnUqpTt8="
        alt="First slide" style={{height:'550px'}}
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1394033419/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=RlaY4uZLg2kqvmDBBkk_dkAUfjUdJLi79umilrWcKl8="
        alt="Second slide" style={{height:'550px'}} />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q"
        alt="Third slide" style={{height:'550px'}}/>

      
    </Carousel.Item>
  </Carousel>
  </div>
  

  <div className="hero">
    <div className="card bg-dark text-black">
    <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCagjBBc1X7zILDwYlKk_jJfpmwytRjj8SEdKCxfufsws-FiMUP9_jfAP0bYd4jmKhQ&usqp=CAU" alt="" srcset="" />  
    <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h5 className="card-tittle display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
        <p className="card-text lead fs-2">CHECK OUT ALL </p>
        <p className="card-text lead fs-2">Last updated 1 mins ago</p>

   </div>
  </div>
   </div> 
    
    
      
    
  </>
  ) 
    }


