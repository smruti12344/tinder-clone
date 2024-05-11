import React, { useState } from 'react'
import '../css/TinderCard.css';
import TinderCard from 'react-tinder-card';
function Tindercard() {
    //configure-state for component
    const [people,setPepole] = useState([
        {
            name: 'Yuvraj Singh',
            pic :"https://2.bp.blogspot.com/-eB4NFDxXXxI/WDLqbtgi6fI/AAAAAAAAAW0/qj_nkYjN4pAgul9e9tysRcnj8yda7UCDwCLcB/s1600/Yuvraj%2BSingh%2BImages-hd.jpg"
        },
        {
            name: 'Rohit Sharma',
            pic :"https://img.cricketworld.com/images/f-075088/rohit-sharma.jpg"
        }
    ])
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

         <div style={{backgroundImage:`url(${person.pic})`}} className='card'>
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
