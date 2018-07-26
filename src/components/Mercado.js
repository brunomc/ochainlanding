import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Text from './Text';


//images
import registroImg from '../media/images/mercado/Shipping-Containers-318x180.jpg';
import tokenImg from '../media/images/mercado/bitcoin-reuters-318x180.jpg';
import auditoriaImg from '../media/images/mercado/auditoria.png';
import contratoImg from '../media/images/mercado/contrato-inteligente.jpg';
import blockchainImg from '../media/images/mercado/hyperledger.jpg';
import trabalheImg from '../media/images/mercado/trabalhe.jpg';

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
              <CardImg top width="100%" src={registroImg} alt="Card image cap" />
              <Card body>
                <CardTitle style={{fontWeight: 'bold' }}>Registro</CardTitle>
                <CardText>Aderimos informações na blockchain, registros com garantia de imutabilidade.</CardText> 
              </Card>
            </Col>
            <Col sm="4">
              <CardImg top width="100%" src={tokenImg} />
              <Card body>
                <CardTitle  style={{fontWeight: 'bold' }}>TOKENIZAÇÃO</CardTitle>
                <CardText>Criamos os tokens especificamente para sua empresa, bens materiais e digitais.</CardText>
              </Card>
            </Col>
            <Col sm="4">
              <CardImg top width="100%" src={contratoImg} alt="Card image cap" />
              <Card body>
                <CardTitle>Contratos Inteligentes</CardTitle>
                <CardText>Desenvolvemos contratos inteligentes para a sua empresa.</CardText>
              </Card>
            </Col>          
          </Row>
          <Row style={{backgroundColor: 'white', backgroundColor: 'white',padding: '50'}}>
           <Col sm="4">
              <CardImg top width="100%" src={blockchainImg} alt="Card image cap" />
              <Card body>
                <CardTitle style={{fontWeight: 'bold' }}>Blockchain Privada</CardTitle>
                <CardText>Suporte e implantação de blockchain privada corporativa</CardText> 
              </Card>
            </Col>
            <Col sm="4">
              <CardImg top width="100%" src={auditoriaImg} />
              <Card body>
                <CardTitle  style={{fontWeight: 'bold' }}>Auditoria</CardTitle>
                <CardText>Auditoria de contratos inteligentes e segurança de dados.</CardText>
              </Card>
            </Col>
            <Col sm="4">
              <CardImg top width="100%" src={trabalheImg} alt="Card image cap" />
              <Card body>
                <CardTitle style={{fontWeight: 'bold' }}>Trabalhe Conosco</CardTitle>
                <CardText>Seja nosso parceiro e tenha equity no desenvolvimento de novas startups.</CardText>
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
