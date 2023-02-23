import React, { useState } from 'react'
import { Layout , Menu } from 'antd'
import Cards from '../Cards/Cards'
import SearchUser from '../SearchUser/searchUser'
import My from '../My/My'


const {Header , Content ,  Sider} = Layout;


const Home = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => setCollapsed(collapsed)
    const [clickMy , setClickMy] = useState(false)

    return(
        <Layout style={{minHeight: '100vh'}}>
            <Sider
            collapsible
            collapsed={collapsed}
            onCollapsed={onCollapse}
            >
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key='1' onClick={() => setClickMy(false)}>
                        
                        <span>Users</span>
                    </Menu.Item>
                    <Menu.Item key='2' onClick={() => setClickMy(true)}>
                       
                        <span>About Me</span>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout>
                <Header style={{background:'#fff', padding: 0}}/>
                <Content  style={{ margin: '20px 16px'}}>

                    { clickMy ? <My/> :  <div><SearchUser/><Cards/></div>}
                </Content>
            </Layout>
        </Layout>
    ) 
}

export default Home;