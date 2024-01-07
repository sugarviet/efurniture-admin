import { useState } from 'react';
import { Table, Button, Space, Popconfirm } from 'antd';
import AppModal from '../../components/AppModal';
import EventCreateForm from './components/EventCreateForm';
import EventUpdateForm from './components/EventUpdateForm';

const Events = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

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


  const handleToggleModalCreateModal = () => {
    setIsModalCreateOpen(!isModalCreateOpen)
  }
  const handleToggleModalUpdateModal = () => {
    setIsModalUpdateOpen(!isModalUpdateOpen)
  }
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
          <Button type="primary" className='primary text-white' onClick={handleToggleModalUpdateModal}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this event?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
            okType='default'
            
            className='primary'
          >
            <Button type="primary" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];


  
  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1 className='text-2xl font-bold mb-3'>Events Management</h1>
      <Button type="primary" className='primary text-white' onClick={handleToggleModalCreateModal} style={{ marginBottom: 16 }}>
        Create Event
      </Button>
      <Table dataSource={events} columns={columns} />



      {/* Modals */}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <EventCreateForm />
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <EventUpdateForm />
      </AppModal>
    </div>
  );
};

export default Events;
