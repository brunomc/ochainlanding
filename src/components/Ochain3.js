import React, { PureComponent } from 'react';
import { css, hover } from 'glamor';

import Text from './Text';
import Globals from '../utils/Globals';
import imagem4Img from '../media/images/ochain/Imagem4.jpg';

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
        <Text title="Análise de dados" subtitle="Plataforma de visualização em tempo real das personas que utilizam o aplicativo para a leitura do código QR">

<img  src={imagem4Img} />


          <p> <br />

            <a>• Geolocalização</a><br />
            <a>• Persona</a><br />
            <a>• Aperfeiçoamento do marketing</a><br />
            <a>• Estratégia de vendas</a><br />
{' '}

          </p>

        </Text>
      </div>
    );
  }
}

export default TextContact;
