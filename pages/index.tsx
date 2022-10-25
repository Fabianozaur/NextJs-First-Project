import type { NextPage } from 'next'
import { Avatar, Button, Card, Col, Layout, PageHeader, Row } from 'antd'
import styles from "../styles/Home.module.css"
import {DownloadOutlined,AlignCenterOutlined,FilterOutlined, MessageOutlined} from "@ant-design/icons"
import { Chart, Util } from '@antv/g2';
import { type } from 'os';
import { ColumnChartComponent } from '../components/ColumnChart';
import { LineChartComponent } from '../components/LineChart';

const Home: NextPage = () => {
  return (
    <Layout>
      <Layout.Header className={styles.header}>
        <b>App Title</b>
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <PageHeader 
          title="Page Title"
          extra={[
            <Button> 
              Export to PDF
              <DownloadOutlined twoToneColor="#ffffff" />
            </Button>,
            <Button>
              {'Notes (3)'}
              <AlignCenterOutlined />
            </Button>,
            <Button>
              Filter 9+
              <FilterOutlined />
            </Button>


          ]}
        />  
        <Row justify="space-evenly">
          <Col  xs={24} lg={11} >
            <div className={styles.column}>
              <Card title="Chart Title"  >
                <ColumnChartComponent></ColumnChartComponent>                
                <div className={styles.row}>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  <div>3 <MessageOutlined /></div>
                </div>

              </Card>
            </div>
          </Col>
          <Col  xs={24} lg={11}>
          <div>
              <Card title="Chart Title"  >
                <LineChartComponent></LineChartComponent>
                <div className={styles.row}>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  <div>3 <MessageOutlined /></div>
                </div>
              </Card>
            </div>
          </Col>
      </Row>
      </Layout.Content>
    </Layout>
    
  )
}

export default Home
