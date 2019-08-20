import React from 'react'
import '../City/City.css'
const City= (props) =>{
        return (<div className="city">
            <a href="#">
                <img src={props.img}/>
                <div className="city-options">
                  <h4>{props.cityname}</h4>
                  <button className="button-option" href="#">SEE OPENINGS</button>
               </div>
             </a>
      </div>
                
            
        );
    }


export default City;
