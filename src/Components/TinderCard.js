import React, { useEffect, useState } from 'react'
import '../css/TinderCard.css';
import TinderCard from 'react-tinder-card';
import axios from './axios.js';
function Tindercard() {
    //configure-state for component
    const [people,setPepole] = useState([]);
    
    useEffect(()=>{
      async function fetchData(){
        const req = await axios.get("/tinder/cards");
        //set data
        setPepole(req.data);
      }
      fetchData();
    },[])
    const Swiped = (direction, nameToDelete) => {
        console.log('You swiped: ' + nameToDelete)
      }
      
      const ooutOfFrame = (name) => {
        console.log(name + ' left the screen')
      }
  return (
    <div className='tinder_cards'>
     <div className='tinderCards_cardContainer'>
     {
        people.map(person=>
          // <h1>{person.name}</h1>
          <TinderCard key={person.name} className='swipe' onSwipe={dir=>Swiped(dir,person.name)} onCardLeftScreen={() => ooutOfFrame(person.name)} preventSwipe={['right', 'left']}>

       <div style={{backgroundImage:`url(${person.picUrl})`}} className='card'>
          <h3>{person.name}</h3>
       </div>

          </TinderCard>
          

          )
      }
     </div>
    </div>
  )
}

export default Tindercard
