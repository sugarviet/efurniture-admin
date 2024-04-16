import { Select } from "antd"
import { classNames } from "../../utils/classNames"
const SelectColor = ({
    data,
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
    value
}) => {
  return (
    <div>
         <Select
         value={value}
                placeholder="Select color"
                optionLabelProp="label"
                bordered={false}
                className={classNames('border-black border-[1px]', className)}
                onChange={onChange}
            >
                {data.map((option) => (
                    <Select.Option key={option.value} value={JSON.stringify(option)} label={
                        <div
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "8px",
                                    backgroundColor: option.value,
                                    borderRadius: '50%'
                                }}
                            />
                            <p>
                                {option.value}

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
                                    backgroundColor: option.value,
                                    borderRadius: '50%',
                                }}
                            />
                            <span>{option.value}</span>
                        </div>
                    </Select.Option>
                ))}
            </Select>
    </div>
  )
}

export default SelectColor