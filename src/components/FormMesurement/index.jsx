import React from 'react';
import { Form, Button, Input, Select } from 'antd';
import FormInputMeasurement from '../FormInputMeasurement';

const {Option} = Select;

const FormMesurement = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    // <Form
    //   name="measurement_form"
    //   onFinish={onFinish}
    //   layout="vertical"
    // >
    //   <Form.Item
    //     name="measurement"
    //     label="Measurement"
    //     rules={[{ required: true, message: 'Please enter the measurement!' }]}
    //   >
    //     <FormInputMeasurement name="measurement"/>
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
    <Form
      onFinish={onFinish}
      initialValues={{ dimension_unit: 'cm', weight_unit: 'kg' }}
    >

      <Form.Item label="Weight">
        <Input.Group>
          <Form.Item name="weight" noStyle>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="weight_unit" noStyle>
            <Select>
              <Option value="kg">kg</Option>
              <Option value="tonne">tonne</Option>
              <Option value="g">g</Option>
            </Select>
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <button>SUBMIT</button>
    </Form>
  );
};

export default FormMesurement;
