import React from 'react';
import { Navbar, Nav} from 'rsuite';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props}>
        <Navbar.Brand href="#">PORTFOLIO</Navbar.Brand>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item eventKey="1">
            Home
          </Nav.Item>
          <Nav.Item eventKey="2">About</Nav.Item>
          <Nav.Item eventKey="3">Contact</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Resume</Nav.Item>
        </Nav>
      </Navbar>
    );
  };

function Navigationbar() {
    const [activeKey, setActiveKey] = React.useState(null);
    return (
      <div>
        <NavBarInstance appearance="subtle" activeKey={activeKey} onSelect={setActiveKey} />
      </div>
    );
  }
  
  export default Navigationbar;