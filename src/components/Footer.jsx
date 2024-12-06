import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #001529, #004080)',
      color: 'white',
      padding: '50px 20px',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    {/* Top Section */}
    <Row gutter={[16, 32]} justify="center">
      {/* About Section */}
      <Col xs={24} sm={24} md={8}>
        <h3 style={{ color: '#FFD420', fontWeight: 'bold', fontSize: '20px' }}>About Blushawk</h3>
        <p style={{ lineHeight: '1.8', fontSize: '14px' }}>
          Blushawk delivers innovative solutions for businesses to thrive in today’s market. 
          Our expertise ensures unparalleled results, empowering growth and success.
        </p>
      </Col>

      {/* Quick Links Section */}
      <Col xs={24} sm={24} md={8}>
        <h3 style={{ color: '#FFD420', fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>Quick Links</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <a
            href="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '10px 20px',
              border: '2px solid #FFD420',
              borderRadius: '5px',
              transition: 'background 0.3s, color 0.3s',
              width: 'fit-content',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFD420';
              e.target.style.color = '#001529';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            About Us
          </a>
          <a
            href="/services"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '10px 20px',
              border: '2px solid #FFD420',
              borderRadius: '5px',
              transition: 'background 0.3s, color 0.3s',
              width: 'fit-content',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFD420';
              e.target.style.color = '#001529';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Services
          </a>
          <a
            href="/contact"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '10px 20px',
              border: '2px solid #FFD420',
              borderRadius: '5px',
              transition: 'background 0.3s, color 0.3s',
              width: 'fit-content',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFD420';
              e.target.style.color = '#001529';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Contact
          </a>
        </div>
      </Col>

      {/* Social Media Section */}
      <Col xs={24} sm={24} md={8} style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#FFD420', fontWeight: 'bold', fontSize: '20px' }}>Connect with Us</h3>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined
              style={{
                fontSize: '28px',
                margin: '0 15px',
                color: '#4267B2',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined
              style={{
                fontSize: '28px',
                margin: '0 15px',
                color: '#1DA1F2',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined
              style={{
                fontSize: '28px',
                margin: '0 15px',
                color: '#E1306C',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined
              style={{
                fontSize: '28px',
                margin: '0 15px',
                color: '#0077B5',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </a>
        </div>
      </Col>
    </Row>

    {/* Divider */}
    <div
      style={{
        borderTop: '1px solid #FFD420',
        margin: '30px 0',
        opacity: '0.5',
      }}
    ></div>

    {/* Footer Bottom */}
    <Row>
      <Col span={24} style={{ textAlign: 'center', fontSize: '12px' }}>
        <p style={{ margin: 0 }}>© 2024 Blushawk. All Rights Reserved.</p>
        <p style={{ margin: 0 }}>
          Crafted with <span style={{ color: '#FFD420' }}>❤️</span> by Blushawk Team
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
