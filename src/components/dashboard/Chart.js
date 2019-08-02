import React from 'react';
import {Bar,Line, Pie} from 'react-chartjs-2';
import {Button,ButtonToolbar,Navbar} from 'react-bootstrap';

import {Nav} from 'react-bootstrap';

import Createproject from './Createproject.js';
export default class Chart extends React.Component
{
constructor(props)
{
super(props);
this.state={
chartData:{
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[
        {
          label:'Recent Projects ',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    }

}

}

render()
{
    let addModalClose= ()=> this.setState({addModalShow:false});

    return(
<div className="chart">
<div className="sidebar-one">
<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/show">Dashboard Overview</Nav.Link>
  <Nav.Link eventKey="link-1">Customizations</Nav.Link>
  <Nav.Link eventKey="link-2">Test Suites</Nav.Link>
  
</Nav>
 </div>
<div className="par">
<Line
data = {this.state.chartData}
options={{


}}
/>

</div>


 <div className="sidebar-two"> 
 <ButtonToolbar>
    <Button className="create"
    variant='danger'
     onClick={()=> this.setState({addModalShow:true})}
    >
      Create+
      </Button>
    <Createproject show={this.state.addModalShow} onHide={addModalClose} />
</ButtonToolbar>

 </div>

</div>
 );
}

}