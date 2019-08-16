import React from 'react';
import axios from 'axios';
import {Form, Col} from 'react-bootstrap';
import {Modal, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import './Projectstyle.css'
import "./Demo.js"

export default class Createproject extends React.Component{
  
state = {
  projectTitle:'',
  projectDescription:'',
  TitleError:'',
  focus: false,
};

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
     
    };
    this.textInput = React.createRef();
    this.handleChangestart = this.handleChangestart.bind(this);
    this.handleChangeend = this.handleChangeend.bind(this);
  }
 
  handleChangestart = (date) =>{
    this.setState({
      startDate: date
    });
  }

  handleChangeend(date) {
    this.setState({
      endDate: date
    });

  }

  _onBlur=() =>{
    console.log(this.textInput.current.value)
    setTimeout(() => {
        if (this.state.focus) {
            this.setState({
                focus: false,
            });
        }
        let TitleError="";
        if (this.textInput.current.value === ("") ){
          TitleError = "invalid title";
        }
        if (TitleError) {
          this.setState({ TitleError});
          return false;
        }
      
        return true;
      
    }, 0);
}
_onFocus=() =>
{
  console.log('ada')
    if (!this.state.focus) {
        this.setState({
            focus: true,
        });
    }
}


// validate = () => {
//   let TitleError = "";
//   if (!this.state.projectTitle.includes("@")) {
//     TitleError = "invalid title";
//   }

//   if (TitleError) {
//     this.setState({ TitleError});
//     return false;
//   }

//   return true;
// };


  onSubmit = e => {
    e.preventDefault();
    const isValid = this._onBlur();
    if (isValid) {
    console.log(this.State);
    this.setState({
      projectTitle:'',
      projectDescription:'',
      TitleError:'', 
    });
    }
    axios.post('/TSM/project/add', this.state)
    .then(response =>{console.log(response)})
    .catch( error =>{console.log(error)})  
             }
                       
render(){
  
return(
<div>

<Modal
       {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
         Create a new Project
        </Modal.Title>
        </Modal.Header>
      <Modal.Body >
       
<div>

  <Form >
     
     <div>
      <label>Project Title*</label>
      <div className = "form-group"> 
      <input 
         type="text" placeholder="Title of Your Project"
       value= {this.state.value}
       onChange={ e=> this.setState({projectTitle : e.target.value})}
       style={{ width: "765px" , marginBottom: "3px"}}
       required
       onFocus={this._onFocus}
       onBlur={this._onBlur}  
       ref={this.textInput}
       />
       <div style={{ fontSize: 12, color: "red" }}>
        {this.state.TitleError}
          </div>
       </div>
      </div>
    
<div className = "styledate">
  
  <label>Start Date:</label>
<DatePicker
    selected={this.state.startDate}
    selectsStart
    dateFormat="dd/MM/yyyy"
    placeholderText="DD/MM/YYYY"
    //startDate={this.state.startDate}
    //endDate={this.state.endDate}
    onChange={ this.handleChangestart}
    maxDate={this.state.endDate}
  //  minDate={this.state.startDate}
/>



<label>End Date:</label>
<DatePicker
    selected={this.state.endDate}
    selectsEnd
    dateFormat="dd/MM/yyyy"
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeend}
    minDate={this.state.startDate}
/> 
</div>

  <Form.Row>
<Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Project Description</Form.Label>
  <Form.Control required type="textarea" as="textarea" rows="3" placeholder="Project Description" 
  value= {this.state.value}
  onChange={ e=> this.setState({projectDescription : e.target.value})}
  /> 
</Form.Group>
</Form.Row>
   </Form>

    </div>
      </Modal.Body>

      <Modal.Footer>
    <Button variant="primary" onClick={e => this.onSubmit(e) } >Save </Button>
  </Modal.Footer>
      

     {/* <Button variant="primary" onClick={e => this.onSubmit(e) } >save</Button>  */}
        
    
    </Modal>
</div>

);

}

}
