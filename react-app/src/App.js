import React from 'react';
import { Layout, Row, Col } from 'antd';
import './App.css';
import HorizontalLoginForm from "./components/TopicForm";
import TestTable from "./components/TestTable";


const { Header, Content } = Layout;

const App = () => (

  <Layout>
    <Header className={'app-header'}>Application</Header>
    <Content className={'app-content'}>
      <Row className={'app-row'}>
        <Col span={12}>
          <HorizontalLoginForm/>
        </Col>
        <Col span={12}>
          parem ülemine
        </Col>
      </Row>
      <Row className={'app-row'}>
        <Col span={12}>
          <TestTable/>
        </Col>
        <Col span={12}>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*" className=   {'app-image'} alt="Õnnelik koer heinamaal."></img>
        </Col>
      </Row>
    </Content>

  </Layout>
);

export default App;
