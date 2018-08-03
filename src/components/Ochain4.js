import React, { PureComponent } from 'react';
import { css, hover } from 'glamor';

import Text from './Text';
import Globals from '../utils/Globals';
import imagem6Img from '../media/images/ochain/Imagem6.png';

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
        <Text title="Rastreamento" subtitle="
Utilização na cadeia de
surpimento do vinho">

<img  src={imagem6Img} />


          <p>
            Rastreamento da cadeia do vinho, da plantação até o mercado <br />

            <a>• Atualização em todas as etapas</a><br />
            <a>• Registro das informações na blockchain</a><br />
            <a>• Garantia da originalidade do produto</a><br />
            <a>• Geração de valor</a><br />
{' '}

          </p>

        </Text>
      </div>
    );
  }
}

export default TextContact;
