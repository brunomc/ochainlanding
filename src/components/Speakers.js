import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import estevanImg from '../media/images/speakers/estevan-pb.jpg';
import brunoImg from '../media/images/speakers/brunoAvatar.png';
import stubailoImg from '../media/images/speakers/sashko-pb.jpg';
import jbaxleyiiiImg from '../media/images/speakers/jbaxleyiii-pb.jpg';
import sibeliusImg from '../media/images/speakers/sibelius-pb.jpg';
import daciukImg from '../media/images/speakers/daciuk-pb.jpg';
import marsiglioImg from '../media/images/speakers/marsiglio-pb.jpg';
import amorimImg from '../media/images/speakers/amorim-pb.jpg';
import keteImg from '../media/images/speakers/kete-pb.jpg';
import milfontImg from '../media/images/speakers/milfont-pb.jpg';
import sosaImg from '../media/images/speakers/sosa-pb.jpg';
import raphaelImg from '../media/images/speakers/raphael-pb.jpg';
import sebasImg from '../media/images/speakers/sebas-pb.jpg';
import claraImg from '../media/images/speakers/clara-pb.jpg';
import matheuslimaImg from '../media/images/speakers/matheuslima-pb.jpg';
import keullerImg from '../media/images/speakers/keuller-pb.jpg';
import haskellImg from '../media/images/speakers/haskell-pb.jpg';
import joaoGoncalvesImg from '../media/images/speakers/joaogoncalves-pb.jpg';
import geisyImg from '../media/images/speakers/geisy-pb.jpg';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  name: css({
    fontSize: '1.999em',
    color: Globals.colors.primary,
    fontWeight: 'light',
    margin: '0.66em 0 0.15em 0',
    lineHeight: 1,
    '> a': {
      textDecoration: 'none',
      color: '#222',
    },
  }),
  locale: css({
    fontSize: '1em',
    fontWeight: 'lighter',
    margin: '0 0 0.33em 0',
    '> a': {
      textDecoration: 'none',
      color: '#555',
      fontWeight: 'bold',
    },
  }),
  theme: css({
    fontSize: '1.414em',
    color: Globals.colors.subheader,
    margin: '0 0 0.33em 0',
    fontWeight: 'lighter',
  }),
  card: css({
    width: 300,
    maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: '10px 10px 4em',
    '@media(min-width: 720px)': {
      margin: '10px 10px 1em',
    },
    '> a': {
      textIndent: '-9999px',
      overflow: 'hidden',
      textDecoration: 'none',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    margin: '0 auto',
    maxWidth: 1000,
  }),
};

export const speakers = [
  {
    id: 1,
    name: 'Estevan Wisoczynski',
    theme: 'Economista, Desenvolvedor frontend e empreendedor',
    origin: ' Florianópolis, SC',
    github: 'https://www.linkedin.com/in/estevan-wisoczynski-b6475610b/',
    avatar: estevanImg,
    worksIn: 'Github',
    worksLink: 'https://github.com/estevanpedro',
  },
  {
    id: 2,
    name: 'Bruno Medeiros',
    theme: 'Desenvolvedor fullstack + 10 anos e empreendedor',
    origin: ' Florianópolis, SC',
    github: 'https://www.linkedin.com/in/bruno-medeiros-costa-83856a13/',
    avatar: brunoImg,
    worksIn: 'Github',
    worksLink: 'https://github.com/brunomc',
  },
];

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Membros" reverse />
        <div {...styles.cards}>
          {speakers.map(speaker => {
            return (
              <div key={speaker.id} {...styles.card}>
                <a
                  href={speaker.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="notranslate"
                  {...css({
                    backgroundImage: `url('${speaker.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 300,
                    display: 'block',
                    borderRadius: '150px',
                  })}
                >
                  {speaker.name}
                </a>
                <h3 {...styles.name}>
                  <a
                    href={speaker.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="notranslate"
                  >
                    {speaker.name}
                  </a>
                </h3>
                <p {...styles.locale}>
                  <a
                    href={speaker.worksLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="notranslate"
                  >
                    @{speaker.worksIn}
                  </a>
                  {' / '}
                  {speaker.origin}
                </p>
                <h4 {...styles.theme} className="notranslate">
                  {speaker.theme}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSpeakers;
