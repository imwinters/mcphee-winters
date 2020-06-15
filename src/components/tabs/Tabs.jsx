import React, { useState } from "react";
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import Isaac from "../Isaac/Isaac";
import Harry from "../Harry/Harry";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem
          className={
            activeTab === "1" ? "col-6 font-weight-bold" : "col-6"
          }
        >
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            {activeTab === "1" ? <h3> Harry </h3> : "Harry"}
          </NavLink>
        </NavItem>
        <NavItem
          className={
            activeTab === "2"
              ? "col-6 text-lg font-weight-bold"
              : "col-6"
          }
        >
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            {activeTab === "2" ? <h3> Isaac </h3> : "Isaac"}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="col bg-dark">
        <TabPane tabId="1">
          <Row>
            <Col>
              <Harry />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Isaac />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
