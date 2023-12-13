import { useState } from 'react';
import { Table, Button, Space, Popconfirm, Modal, Form, Input, DatePicker, Select } from 'antd';

const { Option } = Select;

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Event 1',
      startDate: '2023-01-01',
      endDate: '2023-01-10',
      products: ['Product A', 'Product B'],
    },
    {
      id: 2,
      name: 'Event 2',
      startDate: '2023-02-01',
      endDate: '2023-02-10',
      products: ['Product C', 'Product D'],
    },
    // Add more events as needed
  ]);

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Event Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" className='primary text-white' onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this event?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const updatedEvents = [...events];
    const eventIndex = updatedEvents.findIndex((event) => event.id === values.id);

    if (eventIndex !== -1) {
      // Edit existing event
      updatedEvents[eventIndex] = values;
    } else {
      // Create new event
      values.id = Date.now(); // Use a unique identifier for the new event
      updatedEvents.push(values);
    }

    setEvents(updatedEvents);
    setVisible(false);
    form.resetFields();
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    showModal();
  };

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1>Events Management</h1>
      <Button type="primary" className='primary text-white' onClick={showModal} style={{ marginBottom: 16 }}>
        Create Event
      </Button>
      <Table dataSource={events} columns={columns} />

      <Modal
        title="Event Details"
        visible={visible}
        onCancel={handleCancel}
        onOk={form.submit}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="id" hidden />
          <Form.Item
            name="name"
            label="Event Name"
            rules={[{ required: true, message: 'Please enter the event name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: 'Please select the start date!' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: 'Please select the end date!' }]}
          >
            <DatePicker />
          </Form.Item>
      
          <Form.Item
            name="products"
            label="Products"
            rules={[{ required: true, message: 'Please select at least one product!' }]}
          >
            <Select mode="multiple" placeholder="Select products">
              {/* Add product options as needed */}
              <Option value="Product A">Product A</Option>
              <Option value="Product B">Product B</Option>
              <Option value="Product C">Product C</Option>
              <Option value="Product D">Product D</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Events;
