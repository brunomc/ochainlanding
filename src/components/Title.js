import React from 'react';
import { css } from 'glamor';
import Logo from './Logo'
import Globals from '../utils/Globals';

const styles = {
  header: css({
    display:'flex',
    flexDirection: 'row', 
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingBottom: 30,
    textAlign: 'left',
  }),
  title: css({
    color: Globals.colors.white,
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: 4,
    marginLeft: 10,
    lineHeight: '1em',
    fontSize: ' 3.4em ',
  }),
  titleSpan: css({
    color: Globals.colors.main,
  }),
  hrContainer: css({
    width: 25,
    marginLeft: 30,
  }),
  hr: css({
    borderColor: Globals.colors.priaryLight,
  }),
  subtitle: css({
    color: Globals.colors.white,
    fontSize: ' 1.414em ',
    margin: 0,
    lineHeight: '1em',
    marginLeft: 10,
  }),
  iconflagbr: css({
    marginRight: 10,
    width: 30,
  }),
};

const Title = () => (
  <div {...styles.header}>
  <div>
      <Logo />    
  </div>

    <div>
      <h1 {...styles.title} className="notranslate">
        Ochain
        <span {...styles.titleSpan}></span>
      </h1>
       <span {...styles.subtitle}>
      Blockchain Systems
    </span>
    </div>

   
  </div>
);

export default Title;
