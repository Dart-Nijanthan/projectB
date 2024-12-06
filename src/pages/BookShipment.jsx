import React from 'react'; 
import { Form, Input, Button, Row, Col, Typography, Select } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const BookShipment = () => {
  const onFinish = (values) => {
    console.log('Shipment Details:', values);
    // Add API call logic here
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
          background: '#e6f7ff', // Full light blue background
          padding: '30px',
          borderRadius: '15px',
          border: '2px solid #007ACC', // Light blue border
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', color: '#007ACC' }}>
          Book Your Pet Shipment
        </Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: '600px', margin: 'auto' }}
        >
          {/* Full Name */}
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name!' }]}
          >
            <Input
              prefix={<HomeOutlined />}
              placeholder="Enter your full name"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
            />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please enter your phone number!' }]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Enter your phone number"
            />
          </Form.Item>

          {/* Pet Name */}
          <Form.Item
            label="Pet Name"
            name="petName"
            rules={[{ required: true, message: 'Please enter your pet\'s name!' }]}
          >
            <Input placeholder="Enter your pet's name" />
          </Form.Item>

          {/* Pet Type */}
          <Form.Item
            label="Pet Type"
            name="petType"
            rules={[{ required: true, message: 'Please select your pet type!' }]}
          >
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
                rules={[{ required: true, message: 'Please enter the street name!' }]}
              >
                <Input placeholder="Enter street name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="City"
                name="fromCity"
                rules={[{ required: true, message: 'Please enter the city!' }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="State"
                name="fromState"
                rules={[{ required: true, message: 'Please enter the state!' }]}
              >
                <Input placeholder="Enter state" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Pincode"
                name="fromPincode"
                rules={[{ required: true, message: 'Please enter the pincode!' }]}
              >
                <Input placeholder="Enter pincode" />
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
                rules={[{ required: true, message: 'Please enter the street name!' }]}
              >
                <Input placeholder="Enter street name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="City"
                name="toCity"
                rules={[{ required: true, message: 'Please enter the city!' }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="State"
                name="toState"
                rules={[{ required: true, message: 'Please enter the state!' }]}
              >
                <Input placeholder="Enter state" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Pincode"
                name="toPincode"
                rules={[{ required: true, message: 'Please enter the pincode!' }]}
              >
                <Input placeholder="Enter pincode" />
              </Form.Item>
            </Col>
          </Row>

          {/* Additional Notes */}
          <Form.Item label="Additional Notes" name="additionalNotes">
            <Input.TextArea placeholder="Enter any special notes for the shipment" />
          </Form.Item>

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
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>.
    </div>
  );
};

export default BookShipment;
