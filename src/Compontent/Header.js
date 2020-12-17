import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { DatalayerContext } from '../DataLayer';


function Header({spotify}) {
const [ { user } , dispatch] = useContext(DatalayerContext);

    return (
        <div className='Header'>
            <div className='Header_Left'>
                <SearchIcon />
                <input placeholder='Search for Artists,Songs,Albums' type='text' />

            </div>
            <div className='Header_Right'>
                <Avatar src={user?.images[0]?.url} alt='display' />
                <h4>{user?.display_name}</h4>
            </div>


            
        </div>
    )
}

export default Header
