import React from 'react';
import './Card.css'
function Card({card,handleChoice,flipped,disable}) {
    const handleClick=()=>{
      if(!disable){
        handleChoice(card);
     }
       
    }
  
        return(
           <div className="card" >
          <div className={flipped?"flipped":""}>
          <img src={card.src} className='front' alt="img front"/>
          <img src="./img/cover.png" 
      onClick={handleClick} 
      className='back' 
      alt="img back"/>
      
         
    </div>
    </div>
       )

}

export default Card;
