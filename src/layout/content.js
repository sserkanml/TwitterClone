import React from 'react'
import Mainpage from '../components/mainpage'
import PostCreator from '../components/postCreator'
import Welcome from '../components/welcome'
export default function Content() {

    return (
        <div className="content" style={{minHeight:"100vh",width:"650px",marginLeft:"300px"}}>
            <Mainpage/>
            <PostCreator/>
            <Welcome/>
        </div>
    )
}
