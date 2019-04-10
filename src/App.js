import React, { Component } from 'react'
import Accordion from './Accordion/Accordion'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="header-wrap">
            <p className="header">ACCORDION 🎲</p>
          </div>
        </div>
        <Accordion>
          <Accordion.Content className="content">
            <Accordion.Head className="head">애국가1절</Accordion.Head>
            <Accordion.Item className="content">
              <p>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.
                무궁화 삼천리 화려강산 대한 사람, 대한으로 길이 보전하세.
              </p>
            </Accordion.Item>
          </Accordion.Content>
          <Accordion.Content className="content">
            <Accordion.Head>애국가2절</Accordion.Head>
            <Accordion.Item>
              <p>
                남산[11] 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리
                기상일세. 무궁화 삼천리 화려강산 대한 사람, 대한으로 길이
                보전하세.
              </p>
            </Accordion.Item>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}

export default App
