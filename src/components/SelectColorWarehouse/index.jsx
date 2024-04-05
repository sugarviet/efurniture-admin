import { Select } from "antd"
import { classNames } from "../../utils/classNames"
const SelectColorWarehouse = ({
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
    const handleChange = (e) => {
        const values = data.find(item => item.value === e)
        onChange(values)
    }

    console.log(data);
  return (
    <div>
         <Select
               value={value}
                placeholder="Select color"
                optionLabelProp="label"
                bordered={false}
                className={classNames('border-black border-[1px]', className)}
                onChange={handleChange}
            >
                {data.map((option) => (
                    <Select.Option key={option.value} value={option.value} label={
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

export default SelectColorWarehouse