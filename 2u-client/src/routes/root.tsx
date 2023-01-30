
import React from 'react';
import { Layout, Menu, Space } from 'antd';

import { UserOutlined, FireFilled } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";

import CreateInvoice from "./create-invoice";
import Accounting from "./accounting";

const { Header, Content, Footer, Sider } = Layout;

export default function Root() {

    return (
        <>

            <Space direction="vertical"
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <Layout>
                    <Header></Header>
                    <Layout>
                        <Sider>
                            <Menu defaultSelectedKeys={["1"]} mode="inline">
                                <Menu.Item key="1">
                                    <Link to="/create-invoice">
                                        <FireFilled />
                                        <span>Create Invoice</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/accounting">
                                        <FireFilled />
                                        <span>Accounting</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>

                        </Sider>



                        <Content style={{ margin: "0 16px", }}>
                            <div style={{ padding: 24, minHeight: 720 }}>

                                <Routes>
                                    <Route path="/create-invoice" element={<CreateInvoice />}>

                                    </Route>
                                    <Route path="/accounting" element={<Accounting />}>

                                    </Route>
                                </Routes>
                            </div>
                        </Content>
                    </Layout>
                    <Footer></Footer>
                </Layout>
            </Space>
        </>
    )
}





