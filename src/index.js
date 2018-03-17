import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import 'antd/dist/antd.css';
import './style.css';

import { Layout, Input, Button } from 'antd';
const { Header, Footer, Content } = Layout;

const HeaderBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentBody = styled.div`
  background: #fff;
  margin: 16px auto;
  padding: 16px;
  max-width: 1200px;
`;

const FooterBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.8em;
`;

ReactDOM.render(
  <Layout>
    <Header>
      <HeaderBody>
        <h1>Title</h1>
      </HeaderBody>
    </Header>
    <Content style={{ padding: '16px' }}>
      <ContentBody>
        <Flex align="center" justify="center">
          <h2>Login</h2>
        </Flex>
        <Flex align="center" justify="center" flexDirection="column">
          <Box mb={16}>
            <Input size="large" />
          </Box>
          <Box mb={16}>
            <Input size="large" type="password" />
          </Box>
          <Box>
            <Button type="primary">Login</Button>
          </Box>
        </Flex>
      </ContentBody>
    </Content>
    <Footer>
      <FooterBody>
        Demo by <a href="http://michaltaberski.com">Michał Taberski</a>
      </FooterBody>
    </Footer>
  </Layout>,
  document.getElementById('root')
);
