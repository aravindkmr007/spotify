import React from "react";
import "./Footer.css";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid } from "@material-ui/core";
import Slider from '@material-ui/core/Slider';


function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
          <img className='footer_albumLogo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
          <div className='footer_songInfo'>
              <h4>Yesh</h4>
              <p>user</p>
          </div>

      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green"></ShuffleIcon>
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleFilledOutlinedIcon
          fontSize="large"
          className="footer_icon"
        />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid  item  >
              <PlaylistPlayIcon />
            
          </Grid>
          <Grid item >
            <VolumeDownIcon />
          </Grid>
          <Grid item  >
            <Slider  />
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
