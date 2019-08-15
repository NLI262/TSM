import React from 'react';
import {Button,ButtonToolbar,Navbar} from 'react-bootstrap';
import Display from './Display.js';
import Toolbar from './Toolbar.js';
import Sidedrawer from './Sidedrawer.js'
import Chart from './Chart.js';
import './Dashboard.css'

export default class Dashboard extends React.Component{
state={
sideDrawerOpen: true
};

drawOpenClickHandler =()=>{
this.setState((prevState)=> {
  return{ sideDrawerOpen:!prevState.sideDrawerOpen  };

}
);

};

render()
 {
  let sideDrawerOpen;
  if(this.state.sideDrawerOpen){
    sideDrawerOpen=<Sidedrawer/>
  }
  
    return(

  <div style={{width:'100%'}} >
    
<Toolbar drawerClickHandler ={this.drawOpenClickHandler}/>
<Sidedrawer show ={sideDrawerOpen}/>
<main style ={{marginTop:"64px"}}>
    <Chart/>
    
  <Display/>
  <br></br>
  <footer className="footer"> Privacy & policy</footer>

</main>

 
</div>

  );
    }
       }