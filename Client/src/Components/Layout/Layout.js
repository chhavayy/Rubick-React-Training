import { Link, Outlet } from "react-router-dom";
import { Layout, Avatar, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import "antd/dist/antd.css";
import "./Layout.css";

const { Header, Sider, Content } = Layout;
function Lay() {
  return (
    <Layout>
      <Header style={{ background: "blue", padding: 14 }}>
        <h4 style={{ float: "right" }}>
          <div style={{ marginTop: "-35%", marginLeft: "7%" , fontSize:"12px"}}>
            <Link to="/admin">
              <h3 style={{ color: "white" }} level={3}>
                Admin
              </h3>
            </Link>
          </div>
        </h4>
        <Avatar style={{ float: "right" }} icon=" " />
        <Title style={{ color: "white" }} level={3}>
          Rubick.ai
        </Title>
      </Header>
      <Layout>
        <Sider style={{ background: "white" }}>
          <Menu defaultSelectedKeys={"home"}>
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to="/products">Products</Link>
            </Menu.Item>
            <Menu.Item key="settings">
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
        <Content style={{ background: "lightgray", padding: "0px 0px 0px 0px" }}></Content>
        <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
}
export default Lay;
