import React, { PureComponent } from 'react';
import { css, hover } from 'glamor';

import Text from './Text';
import Globals from '../utils/Globals';
import imagem3Img from '../media/images/ochain/Imagem3.png';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#ffffff',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: 'black',
  }),
  transition: css({
    transition: Globals.transitions.primary,
  }),
};

class TextContact extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Soluções antifraude" subtitle="Utilizamos selo QR e blockchain para garantir a originalidade de produtos">

<img  src={imagem3Img} />


          <p>
            Utilizamos selo QR e blockchain para garantir a originalidade de produtos: <br />

            <a>• Geração de valor</a><br />
            <a>• Aumento da visibilidade</a><br />
            <a>• Descoberta do consumidor</a><br />
            <a>• Aperfeiçoamento do marketing</a><br />
{' '}

          </p>
          
        </Text>
      </div>
    );
  }
}

export default TextContact;
