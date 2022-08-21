import React, { useEffect, useState } from 'react'
import Page from "../components/Page"
import { Card, Formik, Form, FormRow, FormGroup, Col, Button, Row, Container, InputGroup } from "react-bootstrap";
import { FcSearch } from "@react-icons/all-files/fc/FcSearch"
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { FaCity } from "@react-icons/all-files/fa/FaCity"
import { MdSubject } from "@react-icons/all-files/md/MdSubject"

export default (props) => {


  return (

    <Page titulo="Contato" subtitulo="Está com alguma dúvida? Contate-nos.">
      <Container className="mt-8" >
        <Form>

          <Row className="mb-3">
            <Form.Group className="relative" as={Col}>
              <InputGroup className="mb-3">
                <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                <Form.Control className="ring-offset-0 ring-2 shadow-2xl" type="name" placeholder="Digite seu nome" />
              </InputGroup>
            </Form.Group>
            <Form.Group className="relative" as={Col}>
              <InputGroup className="mb-3">
                <InputGroup.Text><AiOutlineMail /></InputGroup.Text>
                <Form.Control className="ring-offset-0 ring-2 shadow-2xl" type="email" placeholder="Digite seu e-mail" />
              </InputGroup>
            </Form.Group>
          </Row>


          <Row className="mb-3">
            <Form.Group className="relative" as={Col}>
              <InputGroup className="mb-3">
                <InputGroup.Text><FaCity /></InputGroup.Text>
                <Form.Control className="ring-offset-0 ring-2 shadow-2xl" type="city" placeholder="Digite sua cidade" />
              </InputGroup>
            </Form.Group>
            <Form.Group className="relative" as={Col}>
              <InputGroup className="mb-3">
                <InputGroup.Text><MdSubject /></InputGroup.Text>
                <Form.Control className="ring-offset-0 ring-2 shadow-2xl" type="text" placeholder="Digite o tema do assunto" />
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Escreva mais sobre</Form.Label>
            <Form.Control as="textarea" className="ring-offset-0 ring-2 shadow-2xl" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Anexe um arquivo</Form.Label>
            <Form.Control className="ring-offset-0 ring-2 shadow-2xl" type="file" />
          </Form.Group>
          <Button className="text-center" variant="primary" type="submit">
            Enviar
          </Button>


        </Form>
      </Container>
    </Page>

  )
}