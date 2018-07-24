import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import TopMenu from './TopMenu';
import VideoPlayer from './VideoPlayer';


const styles = {
  container: css({
    background: Globals.colors.transparent,
    color: Globals.colors.primary,
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    marginTop: -70,
  }),
};

const Header = () =>
  <div {...styles.container}>
    <VideoPlayer />
    <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
        <Title />
        <TopMenu />
        
    </div>
    <h1 style={{color: Globals.colors.white,fontSize: '4em'}}>{Globals.textHeader.middle}</h1>
    <Infos />
  </div>;

export default Header;
