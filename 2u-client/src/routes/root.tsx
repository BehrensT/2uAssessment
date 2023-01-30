
import React from 'react';
import { Layout, Menu, Space, theme } from 'antd';

import { CalculatorOutlined, FileAddOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";

import CreateInvoice from "./create-invoice";
import Accounting from "./accounting";

const { Header, Content, Footer, Sider } = Layout;

export default function Root() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>

            <Space direction="vertical"
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <Layout >
                    <Header></Header>
                    <Layout style={{ padding: '0 50pt' }}>
                        {/* <Sider>
                            </Sider> */}
                        <Sider style={{ background: colorBgContainer }} width={200}>
                            <Menu defaultSelectedKeys={["1"]} mode="inline" theme='light'>
                                <Menu.Item key="1">
                                    <Link to="/create-invoice">
                                        <FileAddOutlined />
                                        <span>Create Invoice</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/accounting">
                                        <CalculatorOutlined />
                                        <span>Accounting</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>



                        <Content style={{ margin: "0 16px", background: colorBgContainer }}>
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





