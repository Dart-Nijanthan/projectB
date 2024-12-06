import React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import KitsImage from '../images/Fish.jpg'; // Ensure the image path is correct

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '60px 20px',
        backgroundColor: '#f0f9ff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Hero Section */}
      <Title
        level={1}
        style={{
          color: '#0366d6',
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        Welcome to BluShawk
      </Title>
      <Paragraph
        style={{
          fontSize: '20px',
          color: '#555',
          marginBottom: '40px',
          maxWidth: '700px',
          lineHeight: '1.6',
        }}
      >
        Experience safe and reliable pet shipping with BluShawk. Your pets are our priority, and we make sure they travel in comfort and safety.
      </Paragraph>

      <Row
        gutter={[16, 32]}
        align="middle"
        justify="center"
        style={{
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {/* Left Text Section */}
        <Col xs={24} md={12} style={{ padding: '20px' }}>
          <Title
            level={2}
            style={{
              color: '#0366d6',
              fontSize: '36px',
              marginBottom: '20px',
            }}
          >
            Shipping Pets Made Easy
          </Title>
          <Paragraph
            style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}
          >
            Enjoy free delivery on your first shipment. We prioritize the safety, security, and comfort of your pets during transportation.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/book-shipment')}
            style={{
              backgroundColor: '#ff6f61',
              borderColor: '#ff6f61',
              padding: '14px 50px',
              fontSize: '18px',
              borderRadius: '50px',
              color: '#fff',
              transition: 'all 0.3s ease',
              boxShadow: '0px 5px 15px rgba(255, 111, 97, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0px 8px 20px rgba(255, 111, 97, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ff6f61';
              e.target.style.boxShadow = '0px 5px 15px rgba(255, 111, 97, 0.4)';
            }}
          >
            Book Now
          </Button>
        </Col>

        {/* Right Image Section */}
        <Col xs={24} md={12} style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              maxWidth: '100%',
              overflow: 'hidden',
              borderRadius: '20px',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={KitsImage}
              alt="Shipping Pets"
              style={{
                width: '100%',
                height: 'auto',
                transform: 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))',
                borderRadius: '20px',
              }}
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
