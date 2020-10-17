import React, {useEffect, useState} from 'react';
import {Layout, Menu, Breadcrumb, message, Select} from "antd";
import {call} from "./configuration/call";
import options from "./configuration/navigation";
import {Switch, Route, Link} from 'react-router-dom';
import {Routes} from "./configuration/route";
import UserInformation from "./component/UserInformation";
import {NotFound} from "./component/NotFound";
import {Home} from "./component/Home";


const {Header, Content, Footer} = Layout;
const {Option} = Select;

function App() {

    const [breadcrumb, setBreadcrumb] = useState(['App', 'Home']);
    const [footer, setFooter] = useState(``)
    const [response, setResponse] = useState(false);

    const currentBreadcrumb = () => {
        return breadcrumb.map(item => <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
    }

    useEffect(() => {
        const getFooter = async () => {
            const promise = await call().get('footer?pageName=home');
            if (promise.status === 200) {
                setResponse(true)
                setFooter(`This page was made on ${promise.data.language} using ${promise.data.framework}`);
            }
        }
        getFooter()
            .then()
            .catch(() => {
                message.error("Please check your internet connection", 10);
                setFooter(`There is something wrong with your internet connection...`);
                setResponse(true);
            });
    },[breadcrumb])

    const routing = Routes.map(({path, component: C}) => {
        return <Route key={path} path={path} render={(props) => <C {...props} />}/>
    })

    return (
        <Layout className="layout">
            <Header id={"components-layout-demo-top"} style={{height: '64px', background: "rgba(34,47,62, 1)"}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
                      style={{background: "rgba(34,47,62, 1)"}}>
                    {/*<Menu.Item key="1">*/}
                    <Select defaultValue="Summary"
                            style={{
                                width: 140,
                                marginRight: 24,
                                marginLeft: 16,
                                background: "rgba(255, 255, 255, 1)"
                            }} bordered={false}>
                        {options.map(option => <Option value={option} key={option}>{option}</Option> )}
                    </Select>
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
                    {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
                </Menu>
            </Header>
            <Content style={{padding: '0 16px'}}>
                <Breadcrumb style={{padding: '8px 8px'}}>
                    {currentBreadcrumb()}
                </Breadcrumb>
                <div className="site-layout-content">
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        {routing}
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Content>
            <Footer style={{textAlign: 'center', padding: '8px'}}>
                {response ? footer : "Loading..."}
            </Footer>
        </Layout>
    );
}

export default App;
