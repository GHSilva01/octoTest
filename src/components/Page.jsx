import React from 'react'
import { Jumbotron, Container, Nav, Navbar, Button } from 'react-bootstrap'
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram"
import { IoLogoInstagram } from "@react-icons/all-files/io/IoLogoInstagram"
import { Insta } from './Insta'

export default (props) => {
  return (
    <>
      <Container>
        <h1 className='text-center mt-5 font-bold font-sans'>{props.titulo}</h1>
        <p className='text-center font-semibold font-sans'>{props.subtitulo}</p>
      </Container>

      <Container>
        {props.children}
      </Container>

    </>
  )
}