import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'
import { selectTab } from './tabActions'

class TabHeader extends Component {
    render(){
        const { selectTab, target, icon, label, tab } = this.props
        let selected = tab.selected === target
        let visible = tab.visible[target]
        return(
            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                        data-toggle='tab'
                        onClick={() => selectTab(target)}
                        data-target={target}>
                        <i className={`fa fa-${icon}`}></i> {label}
                    </a>
                </li>
            </If>
        )
    }
}
const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TabHeader)