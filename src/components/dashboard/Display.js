import React from 'react';
import{Card,  CardColumns,Nav, ModalFooter} from 'react-bootstrap';
import Createproject from './Createproject.js';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Display extends React.Component{
  constructor(props)
  {
      super(props);
      this.state={
          items:[],
          isLoaded: true,
          visible: 2,
  
      }
            
      this.loadMore = this.loadMore.bind(this);
      
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 2};
    });
  }

  async componentDidMount() {
    const items = await  (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
    this.setState({ items});
  }

render(){
    let addModalClose= ()=> this.setState({addModalShow:false});


var { isLoaded} = this.state;
 if(!isLoaded){
     return (<div>No Internet connection!</div>);
 }
 
 else{
return(
<section>
  <br></br>
  <h4 className="project">Recent Projects</h4>
  <br></br>
    <div className="column-layout">

<CardColumns className="main-column" >
<Card style={{width:'14rem' , height :'9rem'}}>
    <Card.Body>
      
    
      <Button  onClick={()=> this.setState({addModalShow:true})} variant="outline-primary"><i className="far fa-plus-square fa-3x"></i></Button>
    </Card.Body>
  </Card>

  {this.state.items.slice(0, this.state.visible).map((item, index) => {
                return (
                  
   <Card border="primary" style={{ width: '14rem'  }}>

   
     <Card.Body key={item.id}> 

    <Link to={'/'+ item.name }   > <Card.Title> {item.name }</Card.Title> </Link>
   
    <Card.Text >
          {item.email}
          
      </Card.Text>
      <Button size="sm" variant=" outline-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button> &nbsp; &nbsp;
         <Button  size="sm" variant=" outline-primary"><i class="fa fa-trash-o" aria-hidden="true"></i></Button> &nbsp; &nbsp;
         <Button href="/:item_id"  size="sm" variant=" outline-primary"><i class="fas fa-arrow-right"></i></Button>


 </Card.Body>
</Card>

 

            );
              })}

</CardColumns>

<div className="part1"></div>
<div className='part2'></div>
</div>

<Createproject show={this.state.addModalShow} onHide={addModalClose} />

  {this.state.visible < this.state.items.length &&
  <button  className="load"  onClick={this.loadMore} type="button" className="load-more">Load more</button>
}


 </section>



);

 }


}

}