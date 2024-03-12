/* eslint-disable no-unused-vars */
import { InputNumber } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";

const FORM_TYPE = {
  height: {
    placeholder: 'Please enter a height',
    inputType: 'string'
  },
  width: {
    placeholder: 'Please enter a width',
    inputType: 'string'

  },
  depth: {
    placeholder: 'Please enter a depth',
    inputType: 'string'

  },
  length: {
    placeholder: 'Please enter a length',
    inputType: 'string'
  },
  armrestHeight: {
    placeholder: 'Please enter a length',
    inputType: 'string'
  },
  seats: {
    placeholder: 'Please enter a seats',
    inputType: 'number'
  },

}

const FormInputAttribute = () => {
  return (
    <div>FormInputAttribute</div>
  )
}

export default FormInputAttribute