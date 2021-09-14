import React from 'react'
import { Picture,Gif,Survey,Emoji,Plan } from '../svgComponents/full'
import kedi from "./kedi.jpg";
export default function PostCreator() {
    return (
        <div style={{marginTop:"15px"}}>
         <div style={{display:"flex"}}>
         <img src={kedi} alt="" width="60px" height="60px" style={{borderRadius:"50px",objectFit:"cover"}}/>
            <input type="text" name="post" id="post" placeholder="What's Happening?" style={{width:"100%",height:"70px",border:"none",marginLeft:"10px"}} />
         </div>
           
            <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between"}}>
                <div  style={{display:"flex",justifyContent:"space-around",alignItems:"flex-end"}} className="icons">
                    <Picture/>
                    <Gif/>
                    <Survey/>
                    <Emoji/>
                    <Plan/>
                </div>
                <input type="submit" className="blurs" value="Tweet" style={{fontSize:"18px",border:"none",padding:"9px",borderRadius:"50px",textAlign:"center",background:"rgb(29,155,240)",color:"white",width:"150px"}} />
            </div>
        </div>
    )
}
