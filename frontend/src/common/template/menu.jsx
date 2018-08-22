import React from 'react';
import MenuItem from './menuItem'

const Menu = props => (
    <ul className="sidebar-menu">   
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
            <MenuItem path='Avaliacao'
                label='Escrever Avaliação' icon='pencil' />
    </ul>
)
export default Menu