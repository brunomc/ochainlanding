import React, { PureComponent } from 'react';
import { css, hover } from 'glamor';

import Texto from './Texto';
import validImg from '../media/images/valid.png';
import wallpaperImg from '../media/images/wallpaper.jpg';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  background: css({
  backgroundImage: `url(${wallpaperImg})`,
  width:"100vw",
  length:"100vw",
  }),
};

class Infos extends PureComponent {
  render() {
    return (
      <div {...styles.background} >
        <Texto
           result="Original"
           product= "Cerveja Artesanal"
           text1="Link do registro na blockchain:"
           link="https://etherscan.io/tx/0x4289c1ea654860422a420bfdb639ab6ae70dd27c4fe427b17ec95349feca3f4b">
        </Texto>
      </div>
    );
  }
}

export default Infos;
