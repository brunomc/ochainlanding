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
         <section id="ochain">
          <div {...styles.container}>
            <Text title="OCHAIN 2.0 - ORIGINALIDADE E ANÁLISE DE DADOS">Desenvolvemos uma plataforma que garante a originalidade de produtos e
oferecemos a empresas análise de dados dos consumidores </Text>
          </div>
          <Row style={{backgroundColor: Globals.colors.white }}>
          <Col>
              <Row style={{backgroundColor: Globals.colors.white ,paddingLeft: '50',marginTop: '1em'}}>
           <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold' }}>Selos</CardTitle>
                <CardText>Oferecemos selos para certificar a originalidade dos produtos</CardText> 
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingLeft: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle  style={{fontWeight: 'bold',color: Globals.colors.topic }}>Aplicativo</CardTitle>
                <CardText>Um aplicativo de celular para checar a originalidade do produto</CardText>
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingLeft: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold'}}>Segurança</CardTitle>
                <CardText>Todas informações estão registrada na blockchain</CardText>
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
                <CardTitle style={{fontWeight: 'bold' }}>Transparência</CardTitle>
                <CardText>Os consumidores irão saber se o produto é de boa qualidade</CardText> 
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingRight: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle  style={{fontWeight: 'bold' }}>Valor Agregado</CardTitle>
                <CardText>Mais valor para sua marca e seus produtos</CardText>
              </Card>
            </Col>
            </Row>
            <Row style={{backgroundColor: Globals.colors.white,paddingRight: '50',marginTop: '1em'}}>
            <Col>
              <Card body style={{backgroundColor: Globals.colors.white,color: Globals.colors.topic }}>
                <CardTitle style={{fontWeight: 'bold' }}>Facilidade</CardTitle>
                <CardText>Suporte técnico e assistência para a implantação</CardText>
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
