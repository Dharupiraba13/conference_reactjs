import React from 'react';
import '../App.css'

const Papers = () => {
    return (
        <div>
        <div style={{font:"Times New Roman",color:"#E6E6FA",textAlign:"center"}}>
          <br/><br/>
       <h1 style={{fontSize:"xxx-large"}}><u>
      CALL FOR PAPERS
        </u> 
        </h1>
        </div>
        <p style={{fontfamily:"georgia",color:"azure",textAlign:"justify",paddingLeft:"200px",paddingRight:"200px",fontSize:"x-large"}}>
The conference will bring together leading researchers, engineers and scientists in the domain of interest from around the world. Accordingly, Topics of interest for submission include :
</p>
<ol style={{textAlign:"left",fontfamily: "georgia",color:"#6495ED",fontSize:"large"}}>
<li>
        Space Technology & Systems :
        <br></br>
        <ul style={{fontfamily: "georgia",color:"azure"}}>
            <li>Space Technology and Space Exploration </li> 
            <li>Space Power Generation</li>
            <li>Interplanetory Mission</li>
           <br></br>
        </ul>
</li>
<li>
       Unmanned Aerial Systems :
        <br></br>
        <ul style={{fontfamily: "georgia",color:"azure"}}>
            <li>Unmanned System Design,communication and sensors</li>
            <li>Cubesats</li>
        </ul>
    </li><br></br>
    <li>
        Life Science Issues in Space :<br></br>
        <ul style={{fontfamily: "georgia",color:"azure"}}>
            <li>Human Space Endeavours</li>
            <li>Gravity Variation Effects on Human Bodies</li>
        </ul>
    </li><br></br>
    <li>
        Space Applications :<br></br>
        <ul style={{fontfamily: "georgia",color:"azure"}}>
            <li>Solar Activity Observations</li>
            <li>Weather Cycle Monitoring</li>
          <br/><br/><br/>
        </ul>
    </li>
            
</ol>

        </div>
    );
}

export default Papers;