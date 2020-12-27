import React from 'react';
import { Layout, Row, Col } from 'antd';
import './App.css';
import TopicForm from "./components/TopicForm";
import TestTable from "./components/TestTable";


const { Header, Content } = Layout;
let dataSource = [
    {
        _id: '1',
        title: 'First topic',
        createdAt: '2016-05-18T16:00:00Z',
        viewCount: 100,
    },
    {
        _id: '2',
        title: 'Second topic',
        createdAt: '2018-05-18T16:00:00Z',
        viewCount: 22,
    },
  ]

const App = () => (

  <Layout>
    <Header className={'app-header'}>Application</Header>
    <Content className={'app-content'}>
      <Row className={'app-row'}>
        <Col span={12}>
          <TopicForm/>
        </Col>
        <Col span={12}>
          <TestTable data={dataSource}/>
        </Col>
      </Row>
      <Row className={'app-row'}>
        <Col span={12}>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*" className=   {'app-image'} alt="Õnnelik koer heinamaal."></img>
        </Col>
        <Col span={12}>
        
        </Col>
      </Row>
    </Content>

  </Layout>
);

export default App;
