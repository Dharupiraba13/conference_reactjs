import React from 'react';

const Registration = () => {
    return (
        <div>
         <div style={{font:"Times New Roman",color:"#E6E6FA",textAlign:"center"}}>
          <br/><br/>
       <h1 style={{fontSize:"xxx-large"}}><u>
      REGISTRATION
        </u> 
        </h1>
        </div>
        <p style={{fontfamily: "georgia",color:"azure",textAlign:"justify",paddingLeft:"200px",paddingRight:"200px",fontSize: "large"}}>
    It is mandatory for the author of an accepted paper to register in order for the paper to appear in the proceedings.<br/><sup style={{color:"red"}}>*</sup> Kindly fill out all the details in the form.</p> 
    <form method="get" style={{color:"#00FA9A",textAlign:"center",paddingRight:"100px",fontSize: "larger"}} >
    <label for="fname">First Name   :</label><br/>
    <input type="text" id="fname" name="fname" size="50"/><br/><br/>
    <label for="lname">Last Name    :</label><br/>
    <input type="text" id="lname" name="lname" size="50"/><br/><br/>
    <label for="add">Permanent Address  : </label><br/>
    <input type="text" id="address" name="address" size="50"/><br/><br/>
    <label for="country">Country    :</label><br/>
    <input type="text" id="country" name="country"size="50"/><br/><br/>
    <label for="eid">E-mail :</label><br/>
    <input type="text" id="em_id" name="em_id"size="50"/><br/><br/>
    <label for="pno">Phone Number   : </label><br/>
    <input type="text" id="phno" name="phno"size="50"/><br/><br/>
    <input type="submit" value="Submit"/>
    </form>
    </div>
    );
}

export default Registration;