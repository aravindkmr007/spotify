import { Icon } from '@material-ui/core'
import React from 'react'
import './SidebarOption.css'

function SidebarOption({title,icon}) {
    return (
        <div className='sidebarOption'>
            {icon && <Icon className='sidebarOption_icon'></Icon>}
            {icon ? <h4>{title}</h4> : <p>{title}</p>}            
        </div>
    )
}

export default SidebarOption
