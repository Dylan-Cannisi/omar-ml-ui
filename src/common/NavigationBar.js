import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="xl" bg="dark" variant="dark">
            <Navbar.Brand href="/" >Omar Machine Learning</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown id="collapsible-nav-dropdown" title="Datasets">
                        <NavDropdown.Item href="/dataset/create">Create New Dataset</NavDropdown.Item>
                        <NavDropdown.Item href="/dataset/browse">Browse My Datasets</NavDropdown.Item>
                        <NavDropdown.Item href="/dataset">Browse Public Datasets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown id="collapsible-nav-dropdown" title="Models">
                        <NavDropdown.Item href="/model/create">Create New Model</NavDropdown.Item>
                        <NavDropdown.Item href="/model/browse">Browse My Models</NavDropdown.Item>
                        <NavDropdown.Item href="/model">Browse Public Models</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown id="collapsible-nav-dropdown" title="Watcher">
                        <NavDropdown.Item href="/watcher/create">Create New Watcher</NavDropdown.Item>
                        <NavDropdown.Item href="/watcher">Browse My Watchers</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown id="collapsible-nav-dropdown" title="OGC">
                        <NavDropdown.Item href="/ogc/create">Create New OGC Source</NavDropdown.Item>
                        <NavDropdown.Item href="/ogc">Browse My OGC Sources</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)