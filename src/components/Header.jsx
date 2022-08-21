
import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default () => {

    return (
        <>
            <Navbar className='bg-gray-800 flex-auto'>
                <Nav className="mr-auto">
                <Nav.Link className="text-cyan-50 pt-3 hover:bg-gray-700 hover:text-white rounded-md font-sans font-semibold text-2xl antialiased"><Link className="text-cyan-50 hover:bg-gray-700 hover:text-white" to="/clima">Clima</Link></Nav.Link>
                <Nav.Link className="text-cyan-50 pt-3 hover:bg-gray-700 hover:text-white rounded-md font-sans font-semibold text-2xl antialiased"><Link className="text-cyan-50 hover:bg-gray-700 hover:text-white" to="/contato">Buscar CEP</Link></Nav.Link>
                    <Nav.Link className="text-cyan-50 pt-3 hover:bg-gray-700 hover:text-white rounded-md font-sans font-semibold text-2xl antialiased"><Link className="text-cyan-50 hover:bg-gray-700 hover:text-white" to="/contato">Contato</Link></Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}