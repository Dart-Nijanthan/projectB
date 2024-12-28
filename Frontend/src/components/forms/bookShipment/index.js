import React from 'react'; 
import { Form, Input, Button, Row, Col, Typography, Select } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

const BookShipmentForm = () => {
  const onFinish = (values) => {
    console.log('Shipment Details:', values);
  
    // Ensure that the fromAddress and toAddress are structured as objects
    const formattedValues = {
      ...values,
      fromAddress: {
        streetName: values.fromStreetName,
        city: values.fromCity,
      },
      toAddress: {
        streetName: values.toStreetName,
        city: values.toCity,
      }
    };
  
    // Sending data to the backend (API endpoint for saving the data)
    axios
      .post('http://localhost:5000/api/shipments', formattedValues)
      .then((response) => {
        console.log('Shipment saved and email sent', response.data);
  
        // Prepare the WhatsApp message
        const message = `
          *Shipment Details*\n\n
          Full Name: ${formattedValues.fullName}\n
          Email: ${formattedValues.email}\n
          Phone: ${formattedValues.phone}\n
          Pet Name: ${formattedValues.petName}\n
          Pet Type: ${formattedValues.petType}\n\n
          *From Address*\n
          Street Name: ${formattedValues.fromAddress.streetName}\n
          City: ${formattedValues.fromAddress.city}\n\n
          *To Address*\n
          Street Name: ${formattedValues.toAddress.streetName}\n
          City: ${formattedValues.toAddress.city}
        `;
  
        // Redirect to WhatsApp with the formatted message
        const whatsappUrl = `https://wa.me/919092211667?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
  
        alert('Shipment booked successfully! You will be redirected to WhatsApp.');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error occurred. Please try again!');
      });
  };
  

  const validatePhone = (rule, value) => {
    if (!value) {
      return Promise.reject('Please input your phone number!');
    }
    if (/[^0-9]/.test(value)) {
      return Promise.reject('Phone number must contain only digits!');
    }
    if (value.length !== 10) {
      return Promise.reject('Phone number must be exactly 10 digits!');
    }
    return Promise.resolve();
  };

  return (
    <div
      style={{
        padding: '40px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          background: '#e6f7ff',
          padding: '30px',
          borderRadius: '15px',
          border: '2px solid #007ACC',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', color: '#007ACC' }}>
          Book Your Pet Shipment
        </Title>
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: '600px', margin: 'auto' }}>
          {/* Full Name */}
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name!' }]}>
            <Input prefix={<HomeOutlined />} placeholder="Enter your full name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item label="Phone Number" name="phone" rules={[{ required: true, validator: validatePhone }]}>
            <Input prefix={<PhoneOutlined />} placeholder="Enter your phone number" />
          </Form.Item>

          {/* Pet Name */}
          <Form.Item
            label="Pet Name"
            name="petName"
            rules={[{ required: true, message: "Please enter your pet's name!" }]}>
            <Input placeholder="Enter your pet's name" />
          </Form.Item>

          {/* Pet Type */}
          <Form.Item
            label="Pet Type"
            name="petType"
            rules={[{ required: true, message: 'Please select your pet type!' }]}>
            <Select placeholder="Select pet type">
              <Option value="dog">Dog</Option>
              <Option value="cat">Cat</Option>
              <Option value="bird">Bird</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          {/* From Address */}
          <Title level={4} style={{ color: '#007ACC', marginBottom: '20px' }}>
            From Address
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Street Name"
                name="fromStreetName"
                rules={[{ required: true, message: 'Please enter the street name!' }]}>
                <Input placeholder="Enter street name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="City"
                name="fromCity"
                rules={[{ required: true, message: 'Please enter the city!' }]}>
                <Input placeholder="Enter city" />
              </Form.Item>
            </Col>
          </Row>

          {/* To Address */}
          <Title level={4} style={{ color: '#007ACC', marginBottom: '20px' }}>
            To Address
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Street Name"
                name="toStreetName"
                rules={[{ required: true, message: 'Please enter the street name!' }]}>
                <Input placeholder="Enter street name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="City"
                name="toCity"
                rules={[{ required: true, message: 'Please enter the city!' }]}>
                <Input placeholder="Enter city" />
              </Form.Item>
            </Col>
          </Row>

          {/* Submit Button */}
          <Form.Item style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#007ACC',
                borderColor: '#007ACC',
                padding: '12px 30px',
                fontSize: '18px',
                borderRadius: '5px',
                width: '100%',
              }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookShipmentForm;
