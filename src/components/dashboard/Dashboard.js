import React from 'react';
import {Button,ButtonToolbar,Navbar} from 'react-bootstrap';
import Display from './Display.js';

import Chart from './Chart.js';
import './Dashboard.css'
export default class Dashboard extends React.Component{
state={

addModalShow: false,
      } 
render()
 {
     let addModalClose= ()=> this.setState({addModalShow:false});
    return(

  <div >
<Navbar  >
   &nbsp; &nbsp;  <Navbar.Brand href="#home">Welcome To Test Suite Management</Navbar.Brand>
       <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Help</a> 
            </Navbar.Text>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Text>
              <a href="#login">UserName</a>
            </Navbar.Text>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Text>
              <a href="https://www.nineleaps.com/">Logout</a>
            </Navbar.Text>
         </Navbar.Collapse>
    </Navbar>    

    <Chart/>
    
    <Display/>



</div>

  );
    }
       }