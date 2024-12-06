import React, { useState } from 'react';
import { Menu, Drawer, Row, Col } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #4a90e2, #50c9c3)', // Vibrant gradient
        padding: '15px 30px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Col>
          <img
            src="/path-to-logo/logo.png"
            alt="Logo"
            style={{
              height: '50px',
              cursor: 'pointer',
            }}
            onClick={() => handleNavigation('/')}
          />
        </Col>

        {/* Desktop Menu */}
        <Col xs={0} sm={18} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Menu
            mode="horizontal"
            theme="light"
            style={{
              background: 'transparent',
              borderBottom: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              gap: '15px',
            }}
          >
            {['Home', 'Services', 'About Us', 'Contact Us'].map((item, index) => (
              <Menu.Item
                key={index}
                style={{
                  margin: 0,
                  padding: '0 10px',
                }}
                onClick={() =>
                  handleNavigation(
                    item === 'Home' ? '/' : `/${item.replace(/\s+/g, '').toLowerCase()}`
                  )
                }
              >
                <span
                  style={{
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    transition: 'color 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffde59';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {item}
                </span>
              </Menu.Item>
            ))}
          </Menu>
        </Col>

        {/* Hamburger Icon for Mobile */}
        <Col xs={4} sm={0} style={{ textAlign: 'right' }}>
          <MenuOutlined
            onClick={toggleDrawer}
            style={{
              fontSize: '30px',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          />
        </Col>
      </Row>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={toggleDrawer}
        visible={visible}
        width={250}
        bodyStyle={{
          background: 'linear-gradient(90deg, #4a90e2, #50c9c3)',
          color: '#ffffff',
        }}
      >
        <Menu
          mode="vertical"
          theme="light"
          style={{
            background: 'transparent',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          {['Home', 'Services', 'About Us', 'Contact Us'].map((item, index) => (
            <Menu.Item
              key={index}
              onClick={() => {
                toggleDrawer();
                handleNavigation(
                  item === 'Home' ? '/' : `/${item.replace(/\s+/g, '').toLowerCase()}`
                );
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  display: 'block',
                  padding: '10px 0',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#ffde59')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                {item}
              </span>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
