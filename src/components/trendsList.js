import React from 'react'
import { ThreeDot } from '../svgComponents/full'

export default function TrendsList(props) {
    return (
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{color:"rgba(0,0,0,0.6)"}}>{props.where}</span>
            <h2 style={{marginTop:"2px",fontSize:"23px"}}>{props.baslık}</h2>
            <span style={{marginTop:"-15px",color:"rgba(0,0,0,0.6)"}}>{props.tweet}</span>
            </div>
            <div className="threeDot">
                 <ThreeDot/>
            </div>
           
        </div>
    )
}
