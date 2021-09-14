import React from 'react'
import kedi from "./kedi.jpg";
import {ThreeDot} from "../svgComponents/full" 

export default function SidebarProfile(props) {
    return (
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"280px",margin:"100px auto",padding:"5px"}} >
        <div style={{width:"45px",height:"45px",borderRadius:"50px",display:"flex"}}>

            <img src={kedi} alt="zeynep"  width="100%" height="100%" style={{borderRadius:"50px",objectFit:"cover",marginLeft:"10px"}}/>
            </div>
            <div style={{marginLeft:"20px",display:"flex",flexDirection:"column",width:"160px",}}>
            <span style={{color:"#080807",fontSize:"20px",fontWeight:"600"}}>{props.name}</span>
            <span style={{color:"#474746"}} >@{props.nickName}</span>
            </div>

        
            <ThreeDot/>
      </div>
    )
}
