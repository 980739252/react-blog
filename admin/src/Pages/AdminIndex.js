import { Layout, Menu, Breadcrumb } from "antd";
import React, { useState } from "react";
import "../static/css/AdminIdex.css";
import { Route } from "react-router-dom";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const handleClickArticle = (e) => {
    console.log(e.item.props);
    console.log(e.key);
    if (e.key === 'addArticle') {
      props.history.push('/Admin/add');
    } else {
      props.history.push("/Admin/list");
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<UserOutlined />}
            onClick={handleClickArticle}
            title={"文章管理"}
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="ArticleList">文章列表</Menu.Item>
          </SubMenu>

          <Menu.Item key="9" icon={<FileOutlined />}>
            留言管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <div>
              <Route path="/Admin" exact component={AddArticle} />
              <Route path="/Admin/add/" component={AddArticle} />
              <Route path="/Admin/list/" component={ArticleList} />
              <Route path="/Admin/add/:id" component={AddArticle} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>前端小白</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;
