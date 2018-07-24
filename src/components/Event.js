import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import imgEvent from '../media/images/reactconfbr2017.jpg';
// import imgEvent from "../media/images/reactconfbr-event.jpg";

import Text from './Text';

const styles = {
  afterMovie: css({
    background: Globals.colors.transparent,
    color: Globals.colors.primary,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    '@media(max-width: 1224px)': {
      height: '50vh',
    },
  }),
  afterMovie2: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    width: '100vw',
    height: '100vw',
    display: 'flex',
    '@media(max-width: 1224px)': {
      alignSelf: 'auto',
    },
  }),
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 1224px)': {
      alignSelf: 'auto',
    },
  }),
  imgContainer: css({
    width: '80%',
    '@media(min-width: 1224px)': {
      width: '50%',
      display: 'flex ',
      float: 'left',
      padding: '1em',
      margin: '1em 0 1em 0',
      border: '1px solid lightgray',
    },
    '> img': {
      maxWidth: '100%',
      margin: '0 auto',
      objectFit: 'cover',
    },
    display: 'flex ',
    margin: '0 auto',
  }),
  textContainer: css({
    display: 'flex',
    '@media(min-width:1224px)': {
      padding: '5em 3em 0 3em',
      display: 'flex',
      lineHeight: 2,
      textAlign: 'left',
    },
  }),
  subtitleContainer: css({
    display: 'flex',
    '@media(min-width:1224px)': {
      padding: '0 3em',
      display: 'flex',
      lineHeight: 2,
      textAlign: 'left',
      color: 'rgba(0,0,0,0.6)',
    },
  }),
};

class TextPitch extends PureComponent {
  render() {
    return (
      <div>
         <section id="mercado">
          <div {...styles.container}>
            <Text title="ÁREAS DE ATUAÇÃO">
              <h3 lang="en" className="notranslate">
                Texto aqui
              </h3>
              <div />
              <div {...styles.imgContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXDIhKZ_5dCTp_EE2FeMaPgyR2Y5m5BEVp8y3SMHhnZP06RIC" />
              </div>
              <div {...styles.imgContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXDIhKZ_5dCTp_EE2FeMaPgyR2Y5m5BEVp8y3SMHhnZP06RIC" />
              </div>
              <div {...styles.imgContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXDIhKZ_5dCTp_EE2FeMaPgyR2Y5m5BEVp8y3SMHhnZP06RIC" />
              </div>
              <div {...styles.imgContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXDIhKZ_5dCTp_EE2FeMaPgyR2Y5m5BEVp8y3SMHhnZP06RIC" />
              </div>
              <div {...styles.imgContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXDIhKZ_5dCTp_EE2FeMaPgyR2Y5m5BEVp8y3SMHhnZP06RIC" />
              </div>
              <div {...styles.imgContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXDIhKZ_5dCTp_EE2FeMaPgyR2Y5m5BEVp8y3SMHhnZP06RIC" />
              </div>
            
            </Text>
          </div>
          <div style={{ display:'flex',backgroundColor: 'white', justifyContent: 'center'  }}><a href="#"><img width="50" height="50" src="https://cdn4.iconfinder.com/data/icons/arrows-set-1-1/100/arrow3-512.png"/></a></div>
          <iframe
            title="Video React Conf Brasil 2017"
            {...styles.afterMovie}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/N-vACHJypCM?rel=0&amp;showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

        </section>
      </div>
    );
  }
}

export default TextPitch;
