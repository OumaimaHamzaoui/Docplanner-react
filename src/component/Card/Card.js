import React from 'react'
import './Card.css'

const cities=[{city:'CHOOSE COUNTRY'},{city:'Australia'},{city:'Brazil'},{city:'Chile'},{city:'Colombia'},{city:'Czech'},{city:'France'},
{city:'Italy'},{city:'Mexico'},{city:'Peru'},{city:'Poland'},{city:'Portugal'},{city:'Spain'},{city:'Turkey'},]
const Card= (props) =>{
    return (<div className={props.style}>
        <h2>{props.forwho}</h2>
        <h1>{props.cardIntro}</h1>
        <div className="patient-descript">
                  
							{props.citySelector&& <select > {cities.map((el,i) =><option key={i}>{el.city}</option>)} </select>}	
								
                  
                
         </div>
          <img className="card-img" src={props.image}/>
        </div>
        );
    }


export default Card;
