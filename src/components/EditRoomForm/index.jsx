import FormUploadButton from '../FormUploadButton';
import { DeleteOutlined } from '@ant-design/icons';
import FormInputNumber from '../FormInputNumber';
import FurnitureSelection from '../FurnitureSelection';
import FormList from '../FormList';
import { Form } from 'antd';
import FormTextArea from '../FormTextArea';
import FormInput from '../FormInput';
import useRoom from '../../hooks/useRoom';

const EditRoomForm = ({ data }) => {
    const [form] = Form.useForm();
    const { handleEditRoom } = useRoom(data.slug)


    const transformedThumbs = {
        uid: `1`,
        name: `image.png`,
        status: 'done',
        url: data.thumb
    }
    const handleSubmit = async (values) => {
        const products = values.products.map(product => {
            return {
                product: product.product._id,
                quantity: product.quantity
            }
        })
        const body = {
            ...values,
            products
        }
        handleEditRoom(body)

    };
    return (
        <Form
            maxCount={1}
            initialValues={data}
            form={form}
            layout="vertical"
            requiredMark="optional"
            onFinish={handleSubmit}
            autoComplete="off"
        >

            <FormInput
                label="Name"
                name="name"
                required
                placeholder="Write room name here..."
                message="Please enter the name of the room"
            />

            <FormTextArea
                label="Description"
                name="description"
                required
                placeholder="Write description here..."
                message="Please enter the description of the room"
            />

            <FormUploadButton
                defaultFileList={[transformedThumbs]}
                required
                className='xl:w-[28rem] lg:w-[20rem]'
                label="Image"
                name="thumb"
            />

            <FormList
                initialValues={[{ product: undefined, quantity: 1 }]}
                name="products"
            >
                {({ name, remove }) => {
                    return (
                        <div className="grid grid-cols-6 gap-4 items-center">
                            <Form.Item
                                required
                                rules={[
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            const products =
                                                [...getFieldValue(["products"])] || [];

                                            const isDuplicate =
                                                products.filter(
                                                    (item) => item.product._id === value._id
                                                ).length >= 2;

                                            if (isDuplicate) {
                                                return Promise.reject([
                                                    "Furniture has been already exists",
                                                ]);
                                            }
                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                                className="col-span-5"
                                name={[name, "product"]}
                            >
                                <FurnitureSelection className="h-12" />
                            </Form.Item>
                            <div className="flex gap-4">
                                <FormInputNumber
                                    min={1}
                                    className="h-12"
                                    name={[name, "quantity"]}
                                />
                                <DeleteOutlined
                                    onClick={() => remove(name)}
                                    className="h-12 text-xl mx-auto text-rose-500"
                                />
                            </div>
                        </div>
                    );
                }}
            </FormList>

            <button className="furniture-button mx-auto flex justify-center">Edit</button>
        </Form>
    )
}

export default EditRoomForm