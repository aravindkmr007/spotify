import React, { useContext } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { DatalayerContext } from '../DataLayer';


function Sidebar() {
    const [{playlist}, dispatch] = useContext(DatalayerContext);
    return (
        <div className='sidebar'>
            <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"/>
            <SidebarOption icon={HomeIcon}  title='Home' />
            <SidebarOption icon={SearchIcon} title='Search'/>
            <SidebarOption icon={LibraryMusicIcon} title='Your Library'/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr/>{playlist?.items?.map(
                playlist => 
                <SidebarOption   title={playlist.name} />

            )}
        </div>
    )
}

export default Sidebar
