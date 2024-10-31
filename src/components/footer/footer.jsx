import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='company'>
           <h1>
          Tomato
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed quos iure nihil hic debitis asperiores totam architecto ipsum deleniti reprehenderit molestias, doloribus ducimus incidunt quasi veniam nobis accusamus? Ea!
          </p>
        </div>
        <div className="company">
          <h2>Company</h2>
          <ul>
             <Link to={'Home'}>
            Home
          </Link>
      
          <Link to={'/about-us'}>
            About Us
        </Link>
          <Link to={'delivery'}>
            Delivery
          </Link>
          <Link to={'privacy-policy'}>
        </Link>
         </ul>
        </div>

        <div>
          <h2>
            Get in Touch
          </h2>
          t
        </div>
      </div>
    </footer>
  )
}
