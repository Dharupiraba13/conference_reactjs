import React from 'react';
import bgimg from '../img1.png'

const Home = () => {
    return (
        <div style={{background: `URL(${bgimg})`, backgroundSize: "cover",height:"88vh"}}>
          <div style={{font:"Times New Roman",color:"#E6E6FA",textAlign:"center"}}>
          <br/>
        <h2 style={{color:"#6495ED",texttextAlign:"center"}}>7<sup>th</sup> International Conference on</h2>
       <h1 style={{fontSize: "xxx-large",texttextAlign:"center"}}><u>
       DEEP SPACE EXPLORATION
        </u> 
        </h1>
        </div>
        <div style={{font: 'georgia',color:'azure',textAlign:"right"}}>
        <h1 style={{color:"#6495ED",fontSize: "xx-large",paddingRight:"50px"}}>
     What's Deep Space ?
    </h1>
   
  <p style={{fontSize:'20px',textAlign:"justify",paddingLeft:"1000px"}}>
    Deep space exploration  is the branch of astronomy, astronautics and space technology that is involved with exploring the distant regions of outer space.</p>
      </div>
      <div style={{color:'azure',fontsize:'30px',paddingbottom:'450px'}}>
  <span style={{color:"#6495ED",fontWeight:'bolder'}}> Date :</span>   7-9 February 2021<br/>
  <span style={{color:"#6495ED",fontWeight:'bolder'}}>Venue :</span> Boston,MA,USA
</div>
    </div>    
    );
}

export default Home;