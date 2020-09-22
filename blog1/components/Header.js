import React ,{useState,useEffect} from 'react'
import '../public/components/header.css'
import IconFont from '../until/iconfont'
import {Row,Col, Menu} from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath from '../config/apiUrl'

const Header = () => {
    const [navArray,setNavArray]= useState([])
    useEffect(()=>{
        const feachData = async ()=>{
            const result = await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    
                    return res.data.data
                }
                
            )
            setNavArray(result)
        }
        feachData()
    },[])
    const handleClick=(e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }
    return(
        <div className="header">
          <Row type="flex" justify="center">
              <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                  <span className="header-logo">夜深人静街道的风</span>
                  <span className="header-txt">专注前端开发</span>
              </Col>
      
              <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                  <Menu  mode="horizontal" onClick={handleClick}>
                      <Menu.Item key="0">
                      <IconFont type='iconhome-fill'/>
                          首页
                      </Menu.Item>
                      {
                          navArray.map((item)=>{
                              return(
                                  <Menu.Item key={item.Id}>
                                   <IconFont type={item.icon}/>
                                    {item.typeName}
                                  </Menu.Item>
                              )
                          })
                      }
                      
                    
                  </Menu>
              </Col>
          </Row>
       </div>
      )
}

export default Header