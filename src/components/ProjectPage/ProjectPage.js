import React, { Fragment } from 'react'

// import * as actionCreators from "../actions/Actions.js"

// import { connect } from 'react-redux'

//  export default class Post extends Component {
  

//   render() {
   
  
// var x =window.location.href;
// console.log(x)
// var y= x.substring(x.lastIndexOf('/') +1)
// y=y.replace(/%20/,' ')
// console.log(y)
// var z= y.substring(y.lastIndexOf('/') +1)
// z=z.replace(/%20/,' ')
// console.log(z)


    // const items = this.props.items ? (
    //   <div className="post"  >
    //     <h4 className="center">{this.props.items.name}</h4>
    //     <p>{this.props.items.email}</p>
    //   </div>
    // ) : (
    //   <div className="center">Loading post of {y}...</div>
    // );

//     return (
//       <div className="container">
    
//       <h1> {z}</h1>

   
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.item_id;
//   return {
//     items: state.items.find(item => item.id === id)
//   }
// }

// export default connect(mapStateToProps, actionCreators)(Post)
export default ({ match :{url},items}) =>

<Fragment>
  
<ul>
{items.map(({ id, name}) =>

<li key ={id}>
<p>{name}</p>  

</li>

)}


</ul>


</Fragment>