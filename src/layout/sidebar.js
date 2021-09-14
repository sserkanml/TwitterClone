import React from 'react'
import { TwitterLogo,HomePage,Explorer,Notification,Email,BookMark,Liste,Profile,More,} from '../svgComponents/full';
import SidebarProfile from "../components/sidebarProfile"
import List  from '../components/list';
export default function Sidebar() {
    return (
        <div style={{minHeight:"100vh",width:"300px",position:"fixed"}}>
			  
              <ul style={{display:"flex",flexDirection:"column",position:"relative",marginTop:"80px",marginLeft:"-60px"}}>
              <TwitterLogo/>
              <List il={<HomePage/>} yazi="HomePage"/>
              <List il={<Explorer/>} yazi="Explorer"/>
              <List il={<Notification/>} yazi="Notification"/>
              <List il={<Email/>} yazi="Email"/>
              <List il={<BookMark/>} yazi="Bookmarks"/>
              <List il={<Liste/>} yazi="Lists"/>
              <List il={<Profile/>} yazi="Profile"/>
              <List il={<More/>} yazi="More"/>
              </ul>
              <div className="arda" style={{textAlign:"center",fontSize:"20px",margin:"0 auto",width:"220px",marginTop:"16px",padding:"14px",background:"rgb(29,155,240)",color:"white",borderRadius:"50px",cursor:"pointer"}}>
                  Tweet
              </div>
            <SidebarProfile name="Serkan Namlı" nickName="KediGibidxsdsd"/>
        </div>
    )
}
