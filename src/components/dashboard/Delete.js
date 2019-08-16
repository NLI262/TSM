import React, { Component } from 'react';
//import axios from 'axios';
//import { } from "bootstrap";

export default class Delete extends Component {

    delete()  {
        if(window.confirm('Are you Sure to Delete?'))
        {
            fetch('/TSM/project/delete/4',{
                method: 'DELETE',
                header: {'Accept':'application/json',
                'Content-Type':'application/json'
            }
            })
        }
    }


    render () {
        return (
    <div>         

    <button type="button" class="btn btn-danger" onClick={this.delete}>Delete</button>

    </div>
        );
    }
    }
