import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'; 

import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItem, NavText, SignoutButton, SignoutButtonText } from './styles';

export default function Menu() {
  return (
    <Container >
      <Code>
        <QRCode 
          value="http://awesome.link.qr"
          size={80}
          backgroundColor="#8B10AE"
          color="#FFF"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignoutButton onPress={() => {}}>
        <SignoutButtonText>
          SAIR DO APP
        </SignoutButtonText>
      </SignoutButton>
    </Container>
  );
}