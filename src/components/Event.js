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
            <Text title="ÁREAS DE ATUAÇÃO"> </Text>
          </div>
          <div style={{display:'flex', flexDirection: 'column', backgroundColor: 'white',width: '100%', alignItems: 'center' }}>
            <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', width:'60%', marginBottom: '1em'}}>
              <div style={{display:'flex',flexDirection: 'column', marginLeft: '2em',marginRight: '1em'}}>
                <img width='160em' heigth="160em" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"/>
                <span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa pellentesque, imperdiet ex vitae, vestibulum risus. Suspendisse potenti. Sed posuere dolor at ultricies dignissim. Integer id ultricies diam. Donec dictum, lacus at hendrerit iaculis, diam mi dictum ligula, a molestie ligula mi viverra nulla. Aliquam erat volutpat. In a nisl vel enim posuere rutrum.</p>
                </span>
              </div>
              <div style={{display:'flex',flexDirection: 'column', marginLeft: '2em',marginRight: '1em'}}>
                <img width='160em' heigth="160em" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"/>
                <span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa pellentesque, imperdiet ex vitae, vestibulum risus. Suspendisse potenti. Sed posuere dolor at ultricies dignissim. Integer id ultricies diam. Donec dictum, lacus at hendrerit iaculis, diam mi dictum ligula, a molestie ligula mi viverra nulla. Aliquam erat volutpat. In a nisl vel enim posuere rutrum.</p>
                </span>
              </div>
               <div style={{display:'flex',flexDirection: 'column', marginLeft: '2em',marginRight: '1em'}}>
                <img width='160em' heigth="160em" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"/>
                <span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa pellentesque, imperdiet ex vitae, vestibulum risus. Suspendisse potenti. Sed posuere dolor at ultricies dignissim. Integer id ultricies diam. Donec dictum, lacus at hendrerit iaculis, diam mi dictum ligula, a molestie ligula mi viverra nulla. Aliquam erat volutpat. In a nisl vel enim posuere rutrum.</p>
                </span>
              </div>
            </div>
           </div>
          <div style={{ display:'flex',backgroundColor: 'white', justifyContent: 'center'  }}><a href="#"><img width="50" height="50" src="https://cdn4.iconfinder.com/data/icons/arrows-set-1-1/100/arrow3-512.png"/></a></div>
          <iframe
            {...styles.afterMovie}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eXJHPDs4M3Y?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen />
        </section>
      </div>
    );
  }
}

export default TextPitch;
