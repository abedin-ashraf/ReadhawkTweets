import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

import image from './images.jpeg'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Twitter Icon */}
            {/* <TwitterIcon className='sidebar__twitterIcon' /> */}
            <img className='sidebar__twitterIcon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA6lBMVEVHcEzk6eq5u7x5envk5uaMjo94fX35+vqipabQ0dLj5ebS1dZxc3O8vb6KjY2FjI2zuLmgpKS2t7jm6OnR09QAAABscHDbGTGGiYnhGzJiZGTHx8fmHDNbODbVpqR8e3trZ2aUkpItMjJ8Skj87OtWWVmaFyJ9AAA7Pz96GB48NjbWHjKqpKO3tLOoISqgcGyNDBZ4OjhXCQz+3dxhFhkRGxqYmptJTE3Dioj/+/nMGivu6ujjurfEt7a+HywmAACqCBwEDgs7AwHY2dqmj423dHG1FiQvFBJhRkUTDQfiZmmgWlf4w8D5wsB111OUAAAAFXRSTlMARoTiC8HxIKloFrX53+nVqvSQfJXA7gm1AAABZ0lEQVQ4jeWS127CQBREacY2nSR3ve692xhjeu+Q9v+/E4KIBIjAc5SR9mnO7sxIm0r9EeVyj4jyI4BCGfJ+BjfTEJFJF34DyKI4tVqzjomqVPrG/aIMrXbDF1iWGc5dRN14gs67AsMwQ7fdam6b8nUhkiqZ2qvP+A0XYNds2JWLAPq522tvBdZnmOkOAN5sFSn0GZGWPWcBi+khgrUAPFUNeIwvEipLixXYg89aVocP+FUX1OuOXrshzG17PoOjejhL0VmUffohauJQWGKex1o4meA1UrXA7ASTUDtNri2bIkRGHEv6KNa9ZATRAI8n4mbFHf2MUw339ibhu1p/FPKi8ckNEi7pwIYvffuFcjpFtExHf/+ojwPd01f9gWqIBoDUJY4rDkcuLsYcMnCCkdkPxXU8io2ePHAyp5KFF9KJJEmBviTJkYJ6+hqisbRHufOpnEJQqISyJYUm81w9zyHi/i/5V/oCPd0uiaYeeTIAAAAASUVORK5CYII=' alt='' />

            {/* SidebarOption */}
            <SidebarOption active text='Home' Icon={HomeIcon} />
            <SidebarOption text='Explore' Icon={SearchIcon} />
            <SidebarOption text='Notifications' Icon={NotificationsNoneIcon} />
            <SidebarOption text='Messages' Icon={MailOutlineIcon} />
            <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
            <SidebarOption text='Lists' Icon={ListAltIcon} />
            <SidebarOption text='Profile' Icon={PermIdentityIcon} />
            <SidebarOption text='More' Icon={MoreHorizIcon} />
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

            {/* Button -> Tweet */}
            <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;