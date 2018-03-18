import React from 'react';
import { Layout, Input, Button } from 'antd';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import MTOutlineLogo from 'assets/mt-outline-logo.svg';

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
  text-align: right;
  font-size: 0.8em;
  padding: 0 16px;
`;

export default () => (
  <Layout>
    <Header>
      <HeaderBody>
        <h1>Title</h1>
      </HeaderBody>
    </Header>
    <Content style={{ padding: '0 16px' }}>
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
    <Footer style={{margin: 0, padding: 0}}>
      <FooterBody>
        made by{' '}
        <a href="http://michaltaberski.com" target="_blank" rel="noopener noreferrer">
          <img src={MTOutlineLogo} style={{ height: '12px' }} alt="Michal Taberski logo" />
        </a>
      </FooterBody>
    </Footer>
  </Layout>
);
