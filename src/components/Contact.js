import React from 'react';
import '../App.css'

const Contact = () => {
    return (
       <div>
          <div style={{font:"Times New Roman",color:"#E6E6FA",textAlign:"center"}}>
          <br/><br/>
       <h1 style={{fontSize: "xxx-large"}}><u>
       CONTACT US
        </u> 
        </h1>
        </div>
        <p style={{fontFamily:"georgia",color:"azure",textAlign:"left",paddingLeft:"100px"}}>
    <span style={{color:"#FF8C00"}}>Head Office:</span><br/>
    825,Commonwealth Avenue,<br/>
    Boston,MA 02215.<br/><br/>
    <span style={{color:"#FF8C00"}}>E-mail:</span><br/>info@dse.co
    </p> 
    <form method="get" style={{color:"#00FA9A",textAlign:"left",paddingLeft:"100px",fontSize:"larger"}}>
        <span style={{color:"#FF8C00",textAlign:"left",paddingRight:"990px",fontSize:"x-large"}}> For further queries and details : <br/></span>
        <label for="fname"> Name   :</label><br/>
        <input type="text" id="fname" name="fname"/><br/><br/>
        <label for="eid">E-mail :</label><br/>
        <input type="text" id="em_id" name="em_id"size="50"/><br/><br/>
        <label for="pno">Subject   : </label><br/>
        <input type="text" id="subj" name="subj"size="50"/><br/><br/>
        <label for="pno">Message   : </label><br/>
        <input type="text" id="msg" name="msg"size="50"/><br/><br/>
        <input type="submit" value="Submit"></input>
    </form>
    </div>
    );
}

export default Contact;