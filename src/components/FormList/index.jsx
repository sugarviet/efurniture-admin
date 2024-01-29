/* eslint-disable react/prop-types */
import { Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormItem from '../FormItem';

const FormList = ({children, name, initialValues, ...others}) => {
  return (
    <Form.List name={name} {...others} initialValues={initialValues}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }) => (
            <div key={key}>
              {children({ name, fieldKey, restField, remove })}
            </div>
          ))}
          <FormItem className="mx-auto flex justify-center">
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              Add another option
            </Button>
          </FormItem>
        </>
      )}
    </Form.List>
  )
}

export default FormList