import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import validImg from '../media/images/valid.png';
const styles = {
  container: css({
    width: '100%',
    fontWeight: 'lighter',
    maxWidth: 1000,
    margin: '2em auto',
    textAlign: 'center',
    '> h2': {
      margin: '1em',
      fontSize: '2.827em',
      color: 'white',

    },
    '> h3': {
      fontWeight: 'lighter',
      fontSize: '1.999em',
      margin: '1em',
      color: 'white',
    },
    '> h7': {
      margin: '1em',
      fontSize: '1.414em',
      color: 'white',

    },

    '> img': {
      maxWidth: '100%',
    },
  }),
};

class Texto extends PureComponent {
  render() {
    const { result, product, text1, link } = this.props;

    return (
      <div {...styles.container}>
        <h2>  {result}  </h2>
        <h3>  {product} </h3>
         <img  width="200px" src={validImg}/><br/>
        <h7>  {text1} {link}  </h7>
      </div>
    );
  }
}

export default Texto;
