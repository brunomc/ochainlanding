/* Core */
import React, { Component } from 'react';
import imgLogo from '../../media/images/logo.png';
import styles from './styles';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img style={styles.imgLogo} src={imgLogo} alt="Ochain" />
	  </div>
    );
  }
}
