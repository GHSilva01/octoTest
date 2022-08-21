import React, { useEffect, useState } from 'react'
import Page from "../components/Page"
import { Card } from "react-bootstrap";
import apiClima from '../services/clima.js'
import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar"
import { WiDayCloudy } from "@react-icons/all-files/wi/WiDayCloudy"
import { AiOutlineFieldTime } from "@react-icons/all-files/ai/AiOutlineFieldTime"

export default (props) => {

  const [cidade, setCidade] = useState({})


  useEffect(() => {

    const city = props.user_ip
    apiClima.get().then(results => {
      setCidade(results.data)
      console.log(results.data)

    })
  }, [])

  return (

    <Page titulo="Clima" subtitulo="Acompanhe o tempo na sua cidade!">
      {cidade.results &&
        <Card className="mt-8 shadow-2xl border-solid border-4 border-sky-500">
          <Card.Body>
            <Card.Title class='text-center text-3xl font-medium text-lg font-sans m-3' ><strong >Tempo agora em {cidade.results.city}</strong></Card.Title>
            <Card.Text class='text-center text-7xl'>
              {cidade.results.temp}º
            </Card.Text>
            <Card.Text class='text-2xl font-medium'>
              {cidade.results.description}
            </Card.Text>
            <Card.Text class='text-2xl font-medium'><AiOutlineCalendar />Data: {cidade.results.date}</Card.Text>
            <Card.Text class='text-2xl font-medium'><WiDayCloudy />{cidade.results.currently}</Card.Text>
            <Card.Text class='text-2xl font-medium'><AiOutlineFieldTime />Horário: {cidade.results.time}</Card.Text>
          </Card.Body>
        </Card>
      }
    </Page>

  )
}