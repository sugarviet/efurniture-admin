import FormList from '../../../components/FormList';
import { Divider } from 'antd';
import FormSelectColor from '../../../components/FormSelectColor';
import FormInputNumber from '../../../components/FormInputNumber';
import FormSelect from "@components/FormSelect";

const variationSelect = [{ label: 'color', value: 'color' }]
const CreatingVariation = () => {
    return (

        <FormList
            initialValues={[{ name: 'color' }]}
            isAddMore={false}
            name="variation"
        >
            {({ name, restField, remove }, index) => (
                <div className="w-full">
                    <div className="flex justify-between my-2">
                        <p className="text-base">Product {index + 1}</p>
                        <p
                            onClick={() => remove(name)}
                            className="cursor-pointer"
                        >
                            Remove
                        </p>
                    </div>
                    <FormSelect
                        {...restField}
                        label="Name"
                        name={[name, "name"]}
                        options={variationSelect}
                        required
                    />


                    <div>
                        <FormList
                            initialValues={[{ value: undefined, sub_price: 10000 }]}
                            name={[name, "properties"]}
                        >

                            {({ name, restField, remove }, index) => (
                                <div className="w-full">
                                    <div className="flex justify-between my-2">

                                        <p
                                            onClick={() => remove(name)}
                                            className="cursor-pointer"
                                        >
                                            Remove
                                        </p>
                                    </div>


                                    <FormSelectColor
                                        {...restField}
                                        name={[name, "value"]}
                                        className="w-full"
                                        label="Value"


                                    />
                                    <div className="">
                                        <FormInputNumber
                                            {...restField}
                                            label="Sub Price"
                                            name={[name, "sub_price"]}
                                            prefix="VND"

                                            message="Please enter the discount of ammount"
                                            placeholder="Enter discount ammount"
                                            className="w-full"
                                            min="0"

                                        />

                                    </div>

                                    <Divider dashed />
                                </div>
                            )}
                        </FormList>
                    </div>


                    <Divider dashed />
                </div>
            )}
        </FormList>
    )
}

export default CreatingVariation

{/* <FormSelectColor
                        name={[name, "size"]}
                        className="w-full"
                        label="Collection"
                        defaultValue="lucy"
                        {...restField}
                        options={[
                            {
                                value: "jack",
                                label: "Jack",
                            },
                            {
                                value: "lucy",
                                label: "Lucy",
                            },
                            {
                                value: "Yiminghe",
                                label: "yiminghe",
                            },
                        ]}
                    />
                    <div className="flex gap-4">
                        <FormInputNumber
                            label="Regular Price"
                            name={[name, "regularPrice"]}
                            required
                            message="Please enter the discount of ammount"
                            placeholder="Enter discount ammount"
                            className="w-full"
                            min="0"
                        />
                        <FormInputNumber
                            label="Discount Price"
                            name={[name, "Price"]}
                            required
                            message="Please enter the number of voucher"
                            placeholder="Enter the number of voucher"
                            className="w-full"
                        />
                    </div> */}