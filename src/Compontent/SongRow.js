import React from 'react'
import './SongRow.css'

function SongRow({track}) {
    
    
    return (
        <div className='SongRow'>
            <img className='SongRow_Album' src={track.album.images[0].url} alt='' />
            <div className='Song_info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artists) => artists.name).join(',')}
                    {track.album.name}
                </p>
            </div>
            
        </div>
    )
}

export default SongRow
