import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <span> This is a demo project in Web Application Architecture course</span>
          <p>
            Welcome to our Property Management System! We are dedicated to providing efficient and comprehensive property management solutions for property owners, landlords, and tenants. Our system streamlines various property management tasks, enabling you to simplify your operations and enhance your property management experience..
          </p>
         
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          
          <span>GitHub: geekbooii</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          
          <span>Country: USA</span>
          <span>Current Location: Fairfield, Iowa</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer