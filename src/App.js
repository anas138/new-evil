import React,{useEffect,useState} from "react"
import './App.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaDiscord,FaSortDown,FaSortUp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { height } from "@mui/system";

function App() {
  const [answer,setAnswer] = useState(false)
  const[index,setIndex] = useState()
  const images=["a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png","bunny.png","bunn2.png"]
  useEffect(()=>{
    AOS.init();
  })
  const questiClick=(number)=>{
    setAnswer(!answer)
    setIndex(number)
  }
  return (
    
    <div className="App">
      <div className="wrapper"> 
      <div className="header" >
        <img src="logo.png" className="headerlogo"/>
        <a id="achor" href="#home">HOME</a>
        <a  id="achor"href="#roadMap">ROAD MAP</a>
        <a id="achor" href="#team">TEAM</a>
        <a  id="achor"href="#faq">FAQ</a>
        <a id="headImg"><img src="insta.png"/><img src="twitter.png"/><FaDiscord size="2.5em" style={{padding:"5px",borderRadius:"50%",backgroundColor:"rgb(185, 21, 21)",marginLeft:"5px"}}/></a>
        <button  style={{fontWeight:"bold",fontSize:"18px"}}className="navButton">MINT EVIl APE</button>
      </div>



      <div className="home" id="home">
        <div className="home-sub-text">
        <h2> <span style={{fontSize:"30px"}}>WELCOME TO </span>     <br/>
          <span className="colored">THE <span className="evil-text">EVIL APE</span></span> <br/>
          <span style={{fontSize:"50px"}}>CLUB.</span></h2>
          <span>Lorem ipsum is simply dummy text of printing and<br/>type setting industry </span>
          <div className="main-calender">
            <div className="calender">
              <span id="no">04</span>
              <small id="te">Days</small>
            </div>
            <div className="calender">
              <span id="no">06</span>
              <small id="te">Hours</small>
            </div>
            <div className="calender">
              <span id="no">31</span>
              <small id="te">Minuts</small>
            </div>
            <div className="calender">
              <span id="no">04</span>
              <small id="te">Seconds</small>
            </div>
          </div>
          <button className="home-button">MINT EVIL  APE</button>
          </div>
          <div className="sideHeading"></div>
      </div>
    </div>

   <div className="imagesWraper">
    <div className="images">
    
          <img src="1.png"  style={{borderRadius:"10px", height:"250px" ,width:"400px",bottom:"150px"}}/>
          <img src="2.png"   style={{borderRadius:"10px" , height:"400px" ,width:"400px"}}/>
          <img src="3.png"   style={{borderRadius:"10px" , height:"400px" ,width:"320px"}}/>
          <img src="4.png"   style={{borderRadius:"10px" , height:"400px" ,width:"400px",bottom:"50px"}}/>
          <img src="5.png"   style={{borderRadius:"10px"  , height:"300px" ,width:"400px", bottom:"50px"}}/>
          <img src="6.png"    style={{borderRadius:"10px" , height:"350px" ,width:"320px",bottom:"50px"}}/>
          {/* <img src="g.png"    style={{borderRadius:"10px" , height:"200px" ,width:"300px",bottom:"100px"}}/>
          <img src="h.png"    style={{borderRadius:"10px" , height:"200px" ,width:"300px",bottom:"100px"}}/>
          <img src="bunny.png"  style={{borderRadius:"10px" , height:"300px" ,width:"500px",bottom:"100px"}}/>
          <img src="bunn2.png"  style={{borderRadius:"10px" , height:"300px" ,width:"500px",bottom:"100px"}}/> */}
          
          
          {/* {images.map((img,i)=>{
            return <img src={img} key={i} style={{borderRadius:"10px"}}/>
          })} */}
          
      
    </div>
    </div>
    

    <div className="RoadMap" id="roadMap">
        <h1 className="roadMapHeading">Road Map</h1>
        {/* <div className="roadmapCircles">
        <span style={{color:"white",marginRight:"5px"}}>ORIGINAL<br/> ROADMAP</span>
          <div>
          <img src="map-circle.png" height="150x" width="150px"/><br/>
          <button>Download</button>
          </div>
          <div>
          
          <img src="map-circle-2.png" height="150x" width="150px"/><br/>
          <button>Download</button>
          </div>
          <span style={{color:"white",marginLeft:"5px"}}> ROADMAP FOR HE NEW<br/> EA [EVIL APP]!</span>
        </div> */}


<div className="line" style={{borderLeft:"5px solid rgb(185, 21, 21)"}}></div>

        <div   
      className="roadmApText" style={{color:"white"}} data-aos="fade-up" >
        
        <div  data-aos="fade-up" 
     data-aos-duration="3000"><span id="number">15% </span>Marketing we will begin launching additional marketing with influencers <br/>
          that are relevant and significant in the NFT space to get more eyes than ever <br/>
          on our projectduring and after our public sale.</div>
         <br/>
         <br/>
        <div  data-aos="fade-up"
     data-aos-duration="3000"><span id="number">25% </span>We will begin to distribute 5 ETH right back into the community among <br/>
          random Evil Ape Club NFT holders.</div>
        <br/>
        
        <div  data-aos="fade-up"
     data-aos-duration="3000"> <span id="number">50%</span> Acquire land in the Sandbox to establish our presence in the Metaverse.<br/>
           We believe as the meta verse grows everyone need a place to call their own. <br/>
           We will acquire land and build a unique meeting place exclusive to Evil Ape  <br/>
            Club holders where we will host virtual community gatherings, holiday parties, <br/>
            contest and more.</div>
        <br/>
        <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"> <span id="number">60%</span> 50 ETH goes directly into our community wallet, this will be used for<br/> 
         Marketing,  Merch development, and this will be used in our community DAO, <br/>
         where holders will be able to vote on community decisions as we ascend into <br/>
         the Metaverse</div>
       <br/>
       <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"> <span id="number">70%</span> We are going to be doing Limited edition Merch for now this includes <br/>
         stylish T-Shirts, hoodies, and more. Designs will be limited to create <br/>
         exclusivity. Merch drops will be in limited supply</div>
       <br/>
       <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"><span id="number">80% </span> We will begin launching our staking contract that allows EAC <br/>
         holders to earn $EVIL Coins, which can be used to purchase the following:<br/> 
         NFTs, Whitelist to upcoming projects, Limited edition Metaverse wearables, <br/>
         Limited edition Evil Ape Club Merch,  Vacations, Gift cards, ETH and more.</div>
       <br/>
       <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"><span id="number">100%</span> Roadmap v2.0 - At the completion of roadmap v1.5 we will unveil <br/>
         roadmap v2.0…Stay Tuned…Stay evil !</div>
        </div>


         <img src="road-map-chracters.png" height="200" width="550" className="roadMapImg"/>
      </div>


      <div className="meetTheTeam" id="team">
        <h2>MEET THE TEAM</h2>
        <div className="team">
          


          <div className="teamMembers">
            <img src="circle-team-2.png" height="200" width="200"/>
            <h3>EVIL kinirvel</h3>
            <span>Marketing\PR</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>
          
          <div className="teamMembers">
            <img src="circle-team-6.png" height="200" width="200"/>
            <h3>The EVIL ONE</h3>
            <span>Founder-The Evil One</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>


          <div className="teamMembers">
            <img src="circle-team-3.png" height="200" width="200"/>
            <h3>Pirate</h3>
            <span>Artist</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>


          

          <div className="teamMembers">
            <img src="circle-team-5.png" height="200" width="200"/>
            <h3>ABash</h3>
            <span>Dev \ Web 3 Expert</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>


         
        </div>
      </div>


      <div className="FAQ" id="faq">
        
        <div className="faq-text">
           <h1>FAQ</h1>
           
           <div onClick={()=>{questiClick(1)}}>Q : WHAT IS THE TOTALAMOUNT OF NFTS IN THE EVIL<br/>  APE CLUB COLLECTION? {index==1 && answer==true?     <FaSortUp />: <FaSortDown /> }</div> 
           <div className={`${(answer==true && index==1)?'answerVisible':"anewers"}`}  data-aos="fade-down"   data-aos-easing="ease-in-sine">A : THERE ARE 6969 UNIQUE EVIL APES</div>
           
           <div onClick={()=>{questiClick(2)}} >Q : HOW MUCH IS IT TO MINT? {index==2 && answer==true?<FaSortUp/>:<FaSortDown/>}</div>
           <div className={`${(answer==true && index==2)?'answerVisible':"anewers"}`}  data-aos="fade-down"   data-aos-easing="ease-in-sine">A : OUR WHITELIST PRESALE MINT PRICE IS <br/> 0.65 ETH PUBLIC SALE IS 0.7 ETH ?</div>

           

           <div onClick={()=>{questiClick(3)}}>Q : HOW MUCH WILL EACH EVIL APP COST TO MINT ? {index==3 && answer==true?<FaSortUp/>:<FaSortDown/>}</div>
           <div className={`${(answer==true && index==3)?'answerVisible':"anewers"}`}  data-aos="fade-down"   data-aos-easing="ease-in-sine"> A : Our Whitelist presale mint starts <br/> March 12, 2022 at 12:00 noon EST and last <br/>for 24 hours. Our public sale <br/>starts the following<br/> day March 13, 2022 at 12:00 noon EST.</div>
           
           <div onClick={()=>{questiClick(4)}}>Q : Where can I view my Evil Ape Club NFT ? {index==4 && answer==true?<FaSortUp/>:<FaSortDown/>} </div>
           <div  className={`${(answer==true && index==4)?'answerVisible':"anewers"}`}  data-aos="fade-down"   data-aos-easing="ease-in-sine">A : After a successful mint, <br/>you can view your Rebel Tiger on OpenSea.<br/> by connecting your wallet.</div>

           <div onClick={()=>{questiClick(5)}}    >Q : Where can I view my Evil Ape Club NFT ? {index==5  && answer==true?<FaSortUp/>:<FaSortDown/>}</div>
           <div className={`${(answer==true && index==5)?'answerVisible':"anewers"}`}  data-aos="fade-down"   data-aos-easing="ease-in-sine">A : WHAT IS THE EVIL APE</div>

           <div onClick={()=>{questiClick(6)}}>Q : What Blockchain ? {index==6  && answer==true?<FaSortUp/>:<FaSortDown/>}</div>
           <div className={`${(answer==true && index==6)?'answerVisible':"anewers"}`}  data-aos="fade-down"   data-aos-easing="ease-in-sine">A : ETH Blockchain</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-icon">
         <img src="logo.png" height="100px" width="200px" />
         <img src="social-icon.png" />
         </div>
         <div className="lastHeading">@ 2022 EVIL APE | ALL RIGHTS RESERVED</div>
      </div>
       
    </div>
  );
}

export default App;
