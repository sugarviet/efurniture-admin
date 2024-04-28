import { Form } from "antd"
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import FormInputNumber from "../FormInputNumber";
import useCreatingProductManagement from "../../pages/CreatingProduct/hooks/useCreatingProductManagement";
import FormUploadButton from "../FormUploadButton";
import PropTypes from "prop-types";
import { formatThumbs } from "../../utils/formatThumb";
import { useUpdate, useUpdateWithMultipleKeys } from "../../hooks/api-hooks";
import { get_draft_product, get_draft_product_staff, get_published_product, update_product_staff } from "../../api/productApi";
import { useCreatingProductValues } from "../../pages/CreatingProduct/CreatingProductContext";
import useNotification from "../../hooks/useNotification";
import EditingVariationForm from "../EditingVariationForm";

const UpdateProductForm = ({ data }) => {
    const { error_message, success_message } = useNotification();
    const { listAttribute, form } = useCreatingProductManagement();

    const { mutate: edit } = useUpdateWithMultipleKeys(update_product_staff(data.slug), undefined, () => {
        success_message('products', 'edit')
    }, () => {
        error_message('products', 'edit')
    }, [get_draft_product_staff(), get_published_product()])

    const { handleSelectType, handleSelectSubType } = useCreatingProductValues();

    const formData = {
        ...data,
        thumbs: formatThumbs(data.thumbs),
        type: data.type.name,
        subTypes: data.type.subTypes,
    }

    // const attributeType = Object.entries(data.attributes.attributeType).map(([key, value]) => ({
    //     name: key,
    //     value: value.value,
    //     unit: value.unit
    // }));

    const transformedThumbs = formData.thumbs.map((thumb, index) => ({
        uid: `-${index + 1}`,
        name: `image.png`,
        status: 'done',
        url: thumb
    }));

    const onFinish = (values) => {
        const variation = values.variation.map(variation => {
            const { stock, ...rest } = variation;
            return {
                ...rest,
                properties: rest.properties.map(property => {
                    const { stock, ...restProperty } = property;
                    return restProperty;
                })
            };
        })
        const data = {
            ...values,
            variation: variation,
            thumbs: formatThumbs(values.thumbs)
        }
        edit(data)

    }


    // useEffect(() => {
    //     handleSelectType(data.type.slug)
    //     handleSelectSubType(data.type.subTypes)
    // }, [])
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                requiredMark='optional'
                initialValues={formData}
                onFinish={onFinish}
                autoComplete="off"
            >
                <FormInput
                    type='text'
                    label="Product Title"
                    name="name"
                    placeholder="Write title here..."
                />

                <FormTextArea
                    required
                    label="Product Description"
                    name="description"
                    placeholder="Write description here..."
                />
                <div className="flex gap-10">

                    <FormInputNumber label="Regular Price"
                        required
                        prefix="VND"

                        name="regular_price"
                        placeholder="$$$" />
                    <FormInputNumber label="Sell Price"
                        required
                        prefix="VND"

                        name="sale_price"
                        placeholder="$$$" />

                </div>
                {/* <FormSelectType />

                <FormSelectSubTypes />
                <div>
                    {
                        listAttribute?.length ?
                            (
                                listAttribute?.map((attribute) => (
                                    <FormMeasurementInput
                                        // required
                                        label={attribute.name}
                                        name={["attributes", "attributeType", attribute.name]}
                                        key={attribute._id}
                                    />
                                )
                                )
                            ) : attributeType?.map((attribute) => (
                                <FormMeasurementInput

                                    label={attribute.name}
                                    name={["attributes", "attributeType", attribute.name]}
                                    key={attribute._id}
                                />
                            )
                            )}
                </div> */}
                <FormUploadButton label="Display images" name="thumbs" defaultFileList={transformedThumbs} />
                <EditingVariationForm data={data} />
                <FormInput
                    label="3D model's id"
                    name="model3D"
                    value=""
                    placeholder="Write title here..."
                />
                <button className="furniture-button mx-auto flex justify-center">Edit</button>
            </Form>
        </div>
    )
}

UpdateProductForm.propTypes = {
    data: PropTypes.object,
};

export default UpdateProductForm