import React from 'react';

import { Col, Row, Container } from 'react-bootstrap';

const navbar = () => {
    return(
        <Container>
            <Row className="navbar-container">
                <Col xs={2} md={2} className="navigation-main-item" id="navigation-item"></Col>

            </Row>
        </Container>
    )
}

export default navbar;