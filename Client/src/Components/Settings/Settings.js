import "./Settings.css";
import { Layout} from 'antd';

const {Content } = Layout;
const Settings = () => {
  return (
    <div className="settings">
      <Content style={{background:'lightgray', padding: '50px 50px'}}>
            <div className="site-layout-content">
            <br/>
      <h2>Settings</h2>
      
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
        </p>
      </div>  
            </div>
            </Content>

        
    </div>
    );
};

export default Settings;