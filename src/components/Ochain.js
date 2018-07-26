import React, { Component } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Text from './Text';


//images
import ochainImg from '../media/images/ochain/iPhone-app.png';
import tokenImg from '../media/images/mercado/bitcoin-reuters-318x180.jpg';
import auditoriaImg from '../media/images/mercado/auditoria.png';
import contratoImg from '../media/images/mercado/contrato-inteligente.jpg';
import blockchainImg from '../media/images/mercado/hyperledger.jpg';
import trabalheImg from '../media/images/mercado/trabalhe.jpg';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    color:Globals.colors.topic,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 1224px)': {
      alignSelf: 'auto',
    },
  }),
};

class Ochain extends Component {
  render() {
    return (
      <div>
         <section id="mercado">
          <div {...styles.container}>
            <Text title="OCHAIN 2.0 - ORIGINALIDADE E ANÁLISE DE DADOS">Desenvolvemos uma plataforma que garante a originalidade de produtos e
oferecemos a empresas análise de dados dos consumidores </Text>
          </div>
          <Row style={{backgroundColor: Globals.colors.white }}>
          <Col>
              <Row style={{backgroundColor: Globals.colors.white ,paddingLeft: '50',marginTop: '1em'}}>
           <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold' }}>Registro</CardTitle>
                <CardText>Aderimos informações na blockchain, registros com garantia de imutabilidade.</CardText> 
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingLeft: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle  style={{fontWeight: 'bold',color: Globals.colors.topic }}>TOKENIZAÇÃO</CardTitle>
                <CardText>Criamos os tokens especificamente para sua empresa, bens materiais e digitais.</CardText>
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingLeft: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold'}}>Contratos Inteligentes</CardTitle>
                <CardText>Desenvolvemos contratos inteligentes para a sua empresa.</CardText>
              </Card>
            </Col>          
          </Row>   
            </Col>
            <Col sm='2' style={{display: 'flex',justifyContent: 'center',  backgroundColor: Globals.colors.white}} >
              <img  src={ochainImg} />
            </Col>
            <Col>
              <Row style={{backgroundColor: Globals.colors.white,paddingRight: '50',marginTop: '1em'}}>
           <Col >
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold' }}>Registro</CardTitle>
                <CardText>Aderimos informações na blockchain, registros com garantia de imutabilidade.</CardText> 
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingRight: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle  style={{fontWeight: 'bold' }}>TOKENIZAÇÃO</CardTitle>
                <CardText>Criamos os tokens especificamente para sua empresa, bens materiais e digitais.</CardText>
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingRight: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold' }}>Contratos Inteligentes</CardTitle>
                <CardText>Desenvolvemos contratos inteligentes para a sua empresa.</CardText>
              </Card>
            </Col>          
          </Row>   
            </Col>
          </Row>
          
          <div style={{ display:'flex',backgroundColor: 'white', justifyContent: 'center'  }}><a href="#"><img width="50" height="50" src="https://cdn4.iconfinder.com/data/icons/arrows-set-1-1/100/arrow3-512.png"/></a></div>
        </section>
      </div>
    );
  }
}

export default Ochain;
