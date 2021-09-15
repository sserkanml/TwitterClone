import React from 'react'
import { Search } from '../svgComponents/full'
import Trends from '../components/trends'
import TrendsList from '../components/trendsList'
export default function Timeline() {
    
    return (
        <div className="timeline" style={{width:"280px",marginLeft:"60px",minHeight:"100vh"}}>
            <div style={{display:"flex",height:"50px",padding:"10px",borderRadius:"50px",background:"#E7E7E8"}} className="searchBox">
            <Search/>
            <input type="text" className="pup" name="search" id="search" placeholder="Twitter'da Ara" style={{width:"100%",marginLeft:"10px",border:"none",outline:"none",background:"#E7E7E8"}} />
            </div>
            <Trends/>
            <TrendsList where="Trends on Turkey" baslık="#LoremIpsum" tweet="4.423 Tweet"/>
            <TrendsList where="Trends on Turkey" baslık="#LoremIpsum" tweet="4.423 Tweet"/>
            <TrendsList where="Trends on Turkey" baslık="#LoremIpsum" tweet="4.423 Tweet"/>
            <TrendsList where="Trends on Turkey" baslık="#LoremIpsum" tweet="4.423 Tweet"/>
            <div style={{color:"blue",fontSize:"18px" ,marginTop:"20px"}}>Show Much More</div>
        </div>
    )
}
