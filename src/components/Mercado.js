import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
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
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 1224px)': {
      alignSelf: 'auto',
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
          <Row style={{backgroundColor: 'white', backgroundColor: 'white',padding: '50'}}>
           <Col sm="4">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <Card body>
                <CardTitle>Garantia de originalidade de produtos</CardTitle>
                <CardText>Utilizando blockchain garantimos que os produtos são originais para os consumidores.</CardText>
                <Button>Ver Mais...</Button>
              </Card>
            </Col>
            <Col sm="4">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="4">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
           
          </Row>
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
