import React from 'react'
import { StarPage } from '../svgComponents/full'

export default function Mainpage() {
    return (
        <div className="mainpage" style={{width:"100%",display:"flex",height:"40px",alignItems:"center",justifyContent:"space-between"}}>
            <h2 style={{cursor:"pointer"}}>MainPage</h2>
            <StarPage/>
        </div>
    )
}
