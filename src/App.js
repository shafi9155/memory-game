import logo from './logo.svg';
import './App.css';
import Card from './Card'
import { useEffect, useState } from 'react';
const card_img=[
  {"src":"./img/helmet-1.png" ,matched:false},
  {"src":"./img/potion-1.png",matched:false},
  {"src":"./img/ring-1.png",matched:false},
  {"src":"./img/sword-1.png",matched:false},
  {"src":"./img/shield-1.png",matched:false},
  {"src":"./img/scroll-1.png",matched:false},
]
function App() {
  const [card,setCards]=useState([]);
  const [disable,setdisable]=useState(false);
const [turn,setTurn]=useState(0);
const [choiceOne,setchoiceOne]=useState(null);
const [choiceTwo,setchoiceTwo]=useState(null);
  const shuffleCards=()=>{
const shuffledCard=[...card_img,...card_img]
.sort(()=>Math.random()-0.5)
.map((card)=>({...card,id:Math.random()}))
setchoiceOne(null);
  setchoiceTwo(null);
setCards(shuffledCard);
setTurn(0);

  }
// handle Choise
  const handleChoice=(singlecard)=>{
      choiceOne? setchoiceTwo(singlecard): setchoiceOne(singlecard);
      
  }
  //matching hndle
useEffect(()=>{
  
if(choiceOne && choiceTwo){
  setdisable(true);
  if(choiceOne.src===choiceTwo.src){
    setCards(prevcards=>{
      return prevcards.map(card => {
        if(card.src === choiceOne.src){
          return {...card,matched:true};
        }
        else{
          return card;
        }
      })
    })
   
    resetTurn();
  }
  else{
  
   setTimeout(()=>resetTurn(),1000); 
  }
}
},[choiceOne,choiceTwo])

useEffect(()=>{
  shuffleCards()
},[]);
  //resetting turn
  const resetTurn=()=>{
    setchoiceOne(null);
    setchoiceTwo(null);
    setTurn((prev)=>prev+1);
    setdisable(false);
  }
  return (
    <div className="App">
      <h1>Magic Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
      {card.map(
        (card)=>(
        
        <Card 
        card={card} 
        key={card.id} 
        handleChoice={handleChoice}
        flipped={card===choiceOne ||card===choiceTwo ||card.matched===true}
     disable={disable}
     />
      ))}
       </div>
       <h3>Total turn {turn}</h3>
    </div>
  );
}

export default App;
