import React, {useEffect, useState} from "react";
import {Row, DemoBox, Col, Divider} from "antd";
import {call} from "../configuration/call";

const UserInformation = (props) => {


    const [userDetails, setUserDetails] = useState({
        name: "",
        designation: "",
        location: "",
        email_id: "",
        linked_in_id: "",
        github_id: ""
    });

    const [percent, setPercent] = useState(0);

    const getUserDetails = async () => {
        return await call().get("user");
    }

    useEffect(() => {
        getUserDetails()
            .then(res => setUserDetails(res.data));
    }, [])

    return (
        // <div className={"user-information"}>

        // </div>
        <>
            <div style={{width: "70vw", marginLeft: "auto", marginRight:"auto"}}>
                <h2 style={{marginBottom: 0}}>My Information</h2>
                <Divider style={{marginTop: "4px"}}/>
            </div>
            <Row gutter={[48, 32]} justify={"center"} style={{marginTop: 30}}>
                <Col span={5}>
                    {/*<DemoBox value={120}>col-4</DemoBox>*/}
                    <div className={"user-information"}/>
                </Col>
                <Col span={5}>
                    <div className={"user-information"}/>
                </Col>
                <Col span={5}>
                    <div className={"user-information"}/>
                </Col>
            </Row>
            <Row gutter={[48, 32]} justify={"center"} style={{marginBottom: 30}}>
                <Col span={5}>
                    <div className={"user-information"}/>
                </Col>
                <Col span={5}>
                    <div className={"user-information"}/>
                </Col>
                <Col span={5}>
                    <div className={"user-information"}/>
                </Col>
            </Row>
        </>
    )
}
export default UserInformation;
UserInformation.defaultProps = {
    key: `value`
}