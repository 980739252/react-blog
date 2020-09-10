import React from 'react'
import '../public/components/header.css'
import {HomeTwoTone,PlaySquareTwoTone, SmileTwoTone  } from "@ant-design/icons"
import {Row,Col, Menu} from 'antd'
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">夜深人静街道的风</span>
            <span className="header-txt">专注前端开发</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                <HomeTwoTone />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                <PlaySquareTwoTone />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                   <SmileTwoTone/>
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header