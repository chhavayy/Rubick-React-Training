import "./Products.css";
import {Menu, Space,Dropdown, Button,Layout} from "antd";
import { DownOutlined} from '@ant-design/icons';

import {PlusCircleOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";

const menu = (
  <Menu
    items={[
      {
        label: 'January',
        key: '1',
      },
      {
        label: 'February',
        key: '2',
      },
      {
        label: 'March',
        key: '3',
      },
      {
        label: 'April',
        key: '4',
      },
      {
        label: 'May',
        key: '5',
      },
      {
        label: 'June',
        key: '6',
      },
      {
        label: 'July',
        key: '7',
      },
      {
        label: 'August',
        key: '8',
      },
      {
        label: 'September',
        key: '9',
      },
      {
        label: 'October',
        key: '10',
      },
      {
        label: 'November',
        key: '11',
      },
      {
        label: 'December',
        key: '12',
      },
    ]}
  />
);

const Products = () => {
const { Content } = Layout;
  return (
    <div className="products">
      <Content style={{ background: "lightgray", padding: "50px 50px 50px 50px" }}>
        <div className="site-product-content">
          <br />
          <div id="prod"><h2>Products</h2>
          <Link to="/products/Add"><Button type='Primary' shape="round"><PlusCircleOutlined/></Button></Link>
          <Dropdown overlay={menu}>
      <Button>
        <Space>
          This Month
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
          </div>           
          <div id="table"> <ProductTable/>
          </div>
        </div>
      </Content>
      
    </div>
  );
};

export default Products;
