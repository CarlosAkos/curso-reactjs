import { Toast, Row, Col } from "react-bootstrap";
import React from "react";
export default function Toaster({message}){

    const [show, setShow] = React.useState(true);
      
        return (
          <Row>
            <Col xs={6}>
              <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body>{message}</Toast.Body>
              </Toast>
              </Col>
            </Row>
            )
}