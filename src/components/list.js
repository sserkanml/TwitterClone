import React from 'react'

export default function List(props) {
    
    return (
     <li className="liTik" style={{display:"flex",alignItems:"center",marginTop:"10px",position:"relative",width:"200px",height:"50px",margin:"0 auto",fontSize:"22px",color:"#0F1419",}}>
      {props.il}
    
     {props.yazi} 
        
      </li>      
    )
}
