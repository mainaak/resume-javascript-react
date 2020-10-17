import React, {useEffect, useState} from "react";
import {Row, DemoBox, Col, Descriptions} from "antd";
import {call} from "../configuration/call";

const UserInformation = ({match: {params:{username}}}) => {


    const [userDetails, setUserDetails] = useState({
        name: "",
        designation: "",
        location: "",
        email_id: "",
        linked_in_id: "",
        github_id: ""
    });

    const getUserDetails = async () => {
        return await call().get(`users/${username}`);
    }

    useEffect(() => {
        getUserDetails()
            .then(res => setUserDetails(res.data));
    }, [])

    return (
        <div className={"user-information"}>
            {userDetails.name.length > 1 &&
            <Descriptions title={userDetails.name}>
                <Descriptions.Item span={3}>{userDetails.designation}</Descriptions.Item>
                <Descriptions.Item span={3}>{userDetails.location}</Descriptions.Item>
                <Descriptions.Item label="Email">{userDetails.email_id}</Descriptions.Item>
                <Descriptions.Item label="LinkedIn">{userDetails.linked_in_id}</Descriptions.Item>
                <Descriptions.Item label="Github">{userDetails.github_id}</Descriptions.Item>
            </Descriptions>}
        </div>
    )
}
export default UserInformation;
UserInformation.defaultProps = {
    key: `value`
}