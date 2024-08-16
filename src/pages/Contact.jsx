import React from 'react'
import { Container} from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import './contact.css'

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <div className='contact'>
        <ContactForm />
        <Social />
      </div>
      
    </Container>
  )
}

export default Contact