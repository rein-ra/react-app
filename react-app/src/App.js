import React from 'react';
import { Layout, Row, Col } from 'antd';
import './App.css';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header className={'app-header'}>App</Header>
    <Content className={'app-content'}>
      <Row>
        <Col span={12}>Left</Col>
        <Col span={12}>Right</Col>
      </Row>
    </Content>
  </Layout>
);

export default App;