import React, { PureComponent } from 'react';
import { css, before } from 'glamor';
import Globals from '../utils/Globals';

import Item from './Item';

const styles = {
  container: css({
    background: Globals.colors.background,
    color: Globals.colors.white,
    width: '100%',
    flexDirection: 'column',
    '@media(min-width: 720px)': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),

  wrapper: css({
    width: '80%',
    maxWidth: 1000,
    display: 'flex',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media(min-width: 720px)': {
      width: '100%', 
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
    },
  }),

  link: css({
    color: Globals.colors.main,
    textDecoration: 'none',
  }),

  before: before({
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '100%',
    height: '0',
    width: '0',
  }),
};

class Footer extends PureComponent {
  render() {
    return (
      <div {...styles.container} {...styles.before}>
        <div {...styles.wrapper}>
          <Item title="#Ochain" subtitle="Blockchain Systems">
            <div id="google_translate_element" />
          </Item>
          <Item title="Florianópolis - SC / Brasil">
            
          </Item>
          <Item>
            <p>(48) 99634 - 8787</p>
            <p>brunomc@outlook.com</p>
          </Item>
        </div>
      </div>
    );
  }
}

export default Footer;
