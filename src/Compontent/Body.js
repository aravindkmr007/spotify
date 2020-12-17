import React, { useContext } from 'react'
import { DatalayerContext } from '../DataLayer';
import './Body.css'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
  const [ {Discover} , dispatch] = useContext(DatalayerContext);
  function play(e)
  {
     console.log(e) 

  }
  //console.log(Discover)

    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body_info'>
                <img src={Discover?.images[0].url} alt=''/>
                <div className='body_infoText'>
                    <strong>{Discover?.type}</strong>
                    <h2>{Discover?.name}</h2>
                    <p>{Discover?.description}</p>
                </div>
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle' />
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                    

                </div>
                {Discover?.tracks.items.map(item =>
                    <SongRow track={item.track} onClick={play => (item.track)} />)}

            </div>
        </div>
    )
}

export default Body
