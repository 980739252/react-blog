import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Header from '../components/Header'
import {CalendarFilled,FolderFilled,FireFilled} from "@ant-design/icons"
import {Row,Col,List,Breadcrumb} from 'antd'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import  servicePath from '../config/apiUrl'
 function Home(list) {
  const [ mylist , setMylist ] = useState(list.data)
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
       <Header/>
       <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
           <Breadcrumb>
            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
            <Breadcrumb.Item>生活碎片</Breadcrumb.Item>
           </Breadcrumb>
           </div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item=>(
                <List.Item>
                  <div className="list-title"> <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                  <a>{item.title}</a></Link></div>
                  <div className="list-icon">
                    <span><CalendarFilled />2020年7月5号</span>
                    <span><FolderFilled />{item.typeName}</span>
                    <span> <FireFilled />{item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author/>
            <Advert/>
          </Col>
       </Row>
       <Footer/>
    </>
   
  )
}

Home.getInitialProps = async()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{ 
        resolve(res.data)
      }
    )
  })
  return await promise
}
export default Home
