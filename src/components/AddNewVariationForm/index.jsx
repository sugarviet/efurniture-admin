import React from 'react'
import { Divider, Form } from 'antd';
import FormList from '../FormList';
import FormInputNumber from '../FormInputNumber';
import FormSelectColor from '../FormSelectColor';
import { useUpdateWithMultipleKeys } from '../../hooks/api-hooks';
import { add_variation_to_product, get_draft_product_staff, get_published_product } from '../../api/productApi';
import useNotification from '../../hooks/useNotification';
import { message } from "antd";

const AddNewVariationForm = ({ id }) => {
    const { error_message, success_message } = useNotification();
    const { mutate: addNewVariation } = useUpdateWithMultipleKeys(add_variation_to_product(id), undefined, () => {
        success_message('products', 'add_new_variation')
    }, (error) => {
        message.error(error.response.data.error.message)
    }, [get_draft_product_staff(), get_published_product()])
    const [form] = Form.useForm();
    const onFinish = (values) => {
        addNewVariation(values)

    }
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                requiredMark='optional'
                onFinish={onFinish}
                autoComplete="off"
            >
                <div>
                    <FormList
                        initialValues={[{ value: undefined, sub_price: 10000 }]}
                        name="variation"

                    >

                        {({ name, restField, remove }, index) => (
                            <div className="w-full">
                                <div className="flex justify-between my-2">
                                    {
                                        index === 0 ? null :
                                            <p
                                                onClick={() => remove(name)}
                                                className="cursor-pointer underline hover:text-red-700 text-red-500"
                                            >
                                                Remove
                                            </p>
                                    }
                                </div>


                                <FormSelectColor
                                    {...restField}
                                    name={[name, "value"]}
                                    className="w-full"
                                    label="Value"
                                    required


                                />
                                <div className="">
                                    <FormInputNumber
                                        {...restField}
                                        label="Sub Price"
                                        name={[name, "sub_price"]}
                                        prefix="VND"
                                        required
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

                <button className="furniture-button rounded-md mx-auto flex justify-center">Add new variation</button>
            </Form>
        </div>
    )
}

export default AddNewVariationForm