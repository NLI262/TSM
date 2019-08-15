import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route,  Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.js';
import ProjectPage from './components/ProjectPage/ProjectPage.js';






class App extends Component{

  constructor(props)
  {
      super(props);
      this.state={
          items:[],
      }
    }

      async componentDidMount() {
        const items = await  (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
        this.setState({ items});
      }
 
render()
{

  const {items} = this.state
  return(
  <div className = "App">
 <BrowserRouter >

<Route  path="/" exact component={Dashboard}/>
<Route   path="/:item_id" render ={ props => <ProjectPage {...props} items ={items}/>
}/>



</BrowserRouter>
  

  </div>
  );
}
}


export default App;

