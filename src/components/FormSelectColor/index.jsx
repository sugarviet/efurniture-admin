import PropTypes from 'prop-types';
import { Select } from 'antd';
import FormItem from '../FormItem';
import { classNames } from '../../utils/classNames';


const FormSelectColor = ({
    label,
    name,
    placeholder,
    type,
    required,
    message,
    defaultValue,
    className,
    allowClear,
    style,
    onChange,
}) => {
    
    const colorOptions = [
        { value: '#8b7465', label: '#8b7465', color: '#8b7465', colorName: 'Wood' },
        { value: '#af7551', label: '#af7551', color: '#af7551', colorName: 'Light Brown' },
        { value: '#2c2720', label: '#2c2720', color: '#2c2720', colorName: 'Dark Brown'},
        { value: '#330808', label: '#330808', color: '#330808', colorName: 'Red Brown' },
        { value: '#bdbbb7', label: '#bdbbb7', color: '#bdbbb7', colorName: 'Gray'},
        { value: '#b0a292', label: '#b0a292', color: '#b0a292', colorName: 'Dark Sand'},
        { value: '#eadebd', label: '#eadebd', color: '#eadebd', colorName: 'Light Sand'},
        { value: '#f2e8d7', label: '#f2e8d7', color: '#f2e8d7', colorName: 'Sand' },

    ];

    return (
        <FormItem
            label={label}
            name={name}
            type={type}
            required={required}
            message={message}
            style={style}
        >
            <Select
                placeholder="Select color"
                showSearch
                filterOption={(input, option) =>
                    option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                optionLabelProp="label"
                bordered={false}
                className={classNames('border-black border-[1px]', className)}
                onChange={onChange}
            >
                {colorOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value} label={
                        <div
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "8px",
                                    backgroundColor: option.color,
                                    borderRadius: '50%'
                                }}
                            />
                            <p>
                                {option.label}

                            </p>
                        </div>
                    }
>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '8px',
                                    backgroundColor: option.color,
                                    borderRadius: '50%',
                                }}
                            />
                            <span>{option.colorName}</span>
                        </div>
                    </Select.Option>
                ))}
            </Select>
        </FormItem>
    );
};

FormSelectColor.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.any,
    type: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    options: PropTypes.array,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    mode: PropTypes.string,
    allowClear: PropTypes.bool,
    onChange: PropTypes.func,
    style: PropTypes.object,
};

FormSelectColor.defaultProps = {
    label: null,
    required: false,
    message: 'Please fill in this field',
    type: 'default',
    options: [],
    className: '',
    mode: '',
    allowClear: false,
};

export default FormSelectColor;
