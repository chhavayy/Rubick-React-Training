import {Button,Form,Input,Switch} from "antd";
import './Form.css';
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Content } = Layout;

const ProductAdd = () => {

  return (
    <div className="form">
      <Content>      
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
        <h2 style={{ color: "black" }} level={2}>New Products</h2><br/>
        <div className="first">
            <Form.Item label="Product Code" required>
            <Input />
          </Form.Item>
          <Form.Item label="Status" valuePropName="checked">
            <Switch color="orange" checkedChildren='Active' unCheckedChildren='Inactive' defaultChecked  name="status" />
          </Form.Item>
          </div>
          <Form.Item label="Name" required>
            <Input />
          </Form.Item>
          <Form.Item label="Quantity" required>
            <Input />
          </Form.Item>
          <Form.Item label="Price" >
            <Input />
          </Form.Item>
          <div className="Buttons">
          <Form.Item>
            <Button style={{marginLeft:"60px"}}>Cancel</Button>
          </Form.Item>
          <Form.Item >
            <Button type='primary' htmlType='submit' style={{marginLeft:"160px"}}>Submit</Button>
          </Form.Item>
          </div>
        </Form>
      </Content>
    </div>
  );
};

export default ProductAdd;
