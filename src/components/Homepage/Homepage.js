import React, { Component } from "react";
import "./Homepage.css";
import GoogleLogin from "react-google-login";

class Homepage extends Component {
render () {

    const responseGoogle = (response) => {
		console.log(response + " " + response.profileObj.name + " " +response.profileObj.email);
	  }

return (
<div>

<div class="wrapper">

<article class="main">
<br/>
<br/>
<br/>
<br/>
<img src="https://www.nineleaps.com/wp-content/themes/nineleaps/assets/img/nineleaps-logo.svg" height="60px"></img>
<br></br>
<br></br>

<img src="https://media.glassdoor.com/l/5b/74/79/fe/nineleaps-placed-top-10-out-of-the-top-25-start-ups-in-india-for-2018.jpg" height="270px"></img>

<br></br>
<br></br>
<GoogleLogin
            clientId="567723174552-jgcp3opo8fdvfq80d4jpfad3mfls7q01.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}/>

            <br/>
            <br/>

<a href="https://www.nineleaps.com/privacy-policy">
<font color="#2980B9">Privacy Policy</font></a>
    &nbsp;&nbsp;© 2019 Nineleaps

</article>

<aside class="aside aside-1">
<br />
<br />
<br />
<br />
<font color="white" size="5">Welcome to Nineleaps</font>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<font color="white" size="4">Test Suite Management</font>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</aside>


<aside class="aside aside-2"></aside>
</div>

</div>
);
}
}

export default Homepage;