import React from 'react'
import Grid from '../layout/grid'

const labelAndSelect = props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <select value='1' className='form-control'>
                {props.children}
            </select>
        </div>
    </Grid>
)
export default labelAndSelect