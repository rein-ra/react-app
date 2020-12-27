import React from 'react';
import { Layout, Row, Col } from 'antd';
import './App.css';
import HorizontalLoginForm from "./components/TopicForm";


const { Header, Content } = Layout;

const App = () => (

  <Layout>
    <Header className={'app-header'}>Application</Header>
    <Content className={'app-content'}>
      <Row>
        <Col span={12}>
          <HorizontalLoginForm/>
        </Col>
        <Col span={12}>
          parem
        </Col>
      </Row>
    </Content>

  </Layout>
);

export default App;
