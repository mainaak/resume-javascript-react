import React from "react";
import {Col, Divider, Row} from "antd";

const Home = (props) => {

    return(
        <>
            <div style={{width: "70vw", marginLeft: "auto", marginRight:"auto"}}>
                <h2 style={{marginBottom: 0}}>My Information</h2>
                <Divider style={{marginTop: "4px"}}/>
            </div>
            <Row gutter={[48, 32]} justify={"center"} style={{marginTop: 30}}>
                <Col span={5}>
                    {/*<DemoBox value={120}>col-4</DemoBox>*/}
                    <div className={"homepage"}/>
                </Col>
                <Col span={5}>
                    <div className={"homepage"}/>
                </Col>
                <Col span={5}>
                    <div className={"homepage"}/>
                </Col>
            </Row>
            <Row gutter={[48, 32]} justify={"center"} style={{marginBottom: 30}}>
                <Col span={5}>
                    <div className={"homepage"}/>
                </Col>
                <Col span={5}>
                    <div className={"homepage"}/>
                </Col>
                <Col span={5}>
                    <div className={"homepage"}/>
                </Col>
            </Row>
        </>
    )
}
export {Home}