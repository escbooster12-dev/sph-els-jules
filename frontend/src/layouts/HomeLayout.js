import React, { Fragment } from "react";

import { blue } from "@ant-design/colors";
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Layout, Avatar, Dropdown, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header, Content } = Layout;

const HomeLayout = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser.user);

  const menu = (
    <Menu
      style={{ display: "block" }}
      items={[
        {
          key: "1",
          label: "My Profile",
          icon: <UserOutlined style={{ fontSize: "1em" }} />,
          onClick: () => {
            navigate(`/profile?user_id=${currentUser.id}`);
          },
        },
        {
          key: "2",
          label: "Edit Profile",
          icon: <SettingOutlined spin style={{ fontSize: "1em" }} />,
        },
        { type: "divider" },
        {
          key: "3",
          label: "Logout",
          icon: <PoweroffOutlined style={{ fontSize: "1em" }} />,
          onClick: () => {
            localStorage.clear();
            navigate("/login");
          },
        },
      ]}
    />
  );

  return (
    <Fragment>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ backgroundColor: blue[6] }}>
          <div style={{ display: "flex" }}>
            <Link to="/" style={{ color: "#E6F7FF" }}>
              E-Learning
            </Link>
            <ul>
              <li>
                <Link to="/" style={{ fontSize: "1.5rem" }}>
                  Lessons
                </Link>
              </li>
              <li>
                <Link to="/" style={{ fontSize: "1.5rem" }}>
                  Users
                </Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar
                    src={currentUser.avatar_url}
                    style={{ backgroundColor: blue[0] }}
                  />
                </Dropdown>
              </li>
            </ul>
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Fragment>
  );
};

export default HomeLayout;
