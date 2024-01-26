import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='' />
                    <input placeholder="What's happening?"></input>

                </div>
                <input className='tweetBox__imageInput' placeholder='Optional: Enter the image url'></input>
                <Button className='tweetBox--tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
