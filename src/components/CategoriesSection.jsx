import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function CategoriesSection() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }, [])

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>CATEGORY NAME</h1>
        
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-4 my-3" key={key}>
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card>
                  
                  <Card.Body style={{ width: '100%', height: '100%', backgroundColor: '#FFA07A', color:'white' }}>
                    <Card.Title>{key + 1} - {val.toUpperCase().replace()}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        }

      </div>
    </div>
  )
}