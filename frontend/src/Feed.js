import React, { useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]);
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <TweetBox />


            {/* TweetBox */}



            {/* Post */}
            <Post displayName="Ashraf" username="mashraf1s" verified text="Yo yo its working" avatar="" image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" />

            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}

        </div>
    )
}

export default Feed
