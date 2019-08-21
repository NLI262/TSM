import React, { Component } from 'react';

export default class Delete extends Component {

    delete(id)  {
        if(window.confirm('Are you Sure to Delete?'))
        {
            fetch('/TSM/project/delete/'+id,{
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
