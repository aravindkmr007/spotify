import React, { useEffect, useContext} from 'react'
import './App.css';
import Login from './Compontent/Login';
import Player from './Compontent/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi  from 'spotify-web-api-js'
import { DatalayerContext } from './DataLayer'

const spotify = new SpotifyWebApi();


function App() {
  const [ {user,token} , dispatch] = useContext(DatalayerContext);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ='';
    const _token = hash.access_token
    if (_token )
    {
      // let me
      dispatch({
        type:'Set_Token',
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then( user =>
        {
          // me=user;
         dispatch({
          type: 'SET_USER',
          user : user
        })
      }
      )
      spotify.getUserPlaylists().then(playlist =>
        dispatch(
          {
            type:'USER_PLAYLIST',
            playlist : playlist
          }
        )
        ) 
      spotify.getPlaylist('37i9dQZF1E3alk4eW3uqHx').then(Discover =>
        dispatch(
          {
            type:'USER_DISCOVER',
            Discover : Discover
          }
        )
        )

    }
  
  }, []);

  console.log(user)
  //console.log(token)

  return (
    <div className="App" id='homepage'>
      {
        token?(
          <Player spotify={spotify} />
         ):
         ( 
          <Login />
         )
      }
    
    
      
      
      
    </div>
  );
}

export default App;
