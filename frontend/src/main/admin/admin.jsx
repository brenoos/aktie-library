import React from 'react'

import Header from '../../common/template/headerAdmin'
import Footer from '../../common/template/footer'
import Messages from '../../common/msg/messages'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/TabContent'

import Avaliacoes from './avaliacaoList'


const Admin = props => (
    <div className='wrapper'>
        <Header />
        <div className='content-wrapper wrapper-admin'>
            <Tabs>
                <TabsHeader>
                    <TabHeader label='Avaliações' icon='bars' target='tabList' />
                    <TabHeader label='Locadores' icon='users' target='tabLocador' />
                    <TabHeader label='Livros' icon='book' target='tabLivros' />
                </TabsHeader>
                <TabsContent>
                    <TabContent id='tabList'>
                        <Avaliacoes />
                    </TabContent>
                    <TabContent id='tabLocador'>
                        <h1>Locadores</h1>
                    </TabContent>
                    <TabContent id='tabLivros'>
                       <h1>Livros</h1> 
                    </TabContent>
                    
                </TabsContent>
            </Tabs>
        </div>
        <Footer estilo='wrapper-admin' />
        <Messages />
    </div>
)
export default Admin