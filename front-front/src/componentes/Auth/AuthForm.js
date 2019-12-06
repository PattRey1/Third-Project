import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";

function AuthForm() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Form className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AuthForm;
