import React from "react";
import { Container } from "react-bootstrap";
import './Layout.css';

const Footer = () => {
  return (
    <div className={'footer'}>
                <Container>
                    <span className={'text-muted'}>Designed and developed By <strong>Chidinma.</strong></span>
                </Container>
            </div>
  );
};

export default Footer;
