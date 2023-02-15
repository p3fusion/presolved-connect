import React, { useEffect, useState } from 'react';
import { Layout, ConfigProvider, Collapse, Button } from 'antd';
import './assets/style/index.less';
import AgentPrimaryHeader from './layout/header';
import SplitPane, { Pane } from 'react-split-pane';
import CustomCCP from './layout/customCCP';


const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const text = "lorem ipsum lorem i"
const AgentAppMain = () => {
  return (
    <ConfigProvider prefixCls='presolved' theme={{ token: { colorPrimary: '#003594', colorPrimaryBg: '#e6f7ff', } }} >
      <Layout className="app-master">
        <AgentPrimaryHeader />

        <Content className="app-content">
          <SplitPane className='resizable-pane' split="vertical" minSize={400}>
            <div>

              <Collapse defaultActiveKey={['customCCP']}>
                <Panel header="Menu" key="2">
                  <p>{text}</p>
                </Panel>

              </Collapse>

            </div>

            <Pane className='test'>
              <h1>Content Area</h1>
            </Pane>
          </SplitPane>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default AgentAppMain