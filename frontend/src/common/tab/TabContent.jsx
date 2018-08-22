import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'

class TabContent extends Component {
    render(){
        const {id, children, tab} = this.props
        let selected = tab.selected === id
        let visible = tab.visible[id]
        return(
            <If test={visible}>
                <div id={id}
                    className={`tab-pane ${selected ?  'active' : ''}`}>
                    {children}
                </div>
            </If>
        )
    }
}
const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)