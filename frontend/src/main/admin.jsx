import React from 'react';

import Header from '../common/template/headerAdmin'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

const Admin = props => (
    <div className='wrapper'>
        <Header />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)
export default Admin