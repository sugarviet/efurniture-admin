import { Form, Button } from "antd";

import FormMeasurementInput from "../../../../components/FormMeasurementInput";
import FormInputNumber from "../../../../components/FormInputNumber";
import FormInput from "@components/FormInput";
import FormTextArea from "@components/FormTextArea";
import Proptypes from "prop-types";
import { useEffect } from "react";
import FormUploadButton from "../../../../components/FormUploadButton";
import useCreatingProductManagement from "../../../CreatingProduct/hooks/useCreatingProductManagement";
import FormSelectSubTypes from "../../../CreatingProduct/components/FormSelectSubTypes";
import FormSelectType from "../../../CreatingProduct/components/FormSelectType";
import { useCreatingProductValues } from "../../../CreatingProduct/CreatingProductContext";
import PropTypes from "prop-types";

const fakeData = {
  _id: "65ebd4bd03b35aeb6ce8eb68",
  name: "Sofa Cheates 30",
  thumbs: [
    "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc7a69a2b/images/1520000/1522718.jpg?sw=2000",
    "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b9a52ff/images/1520000/1522719.jpg?sw=2000",
    "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf795d1f3/images/1520000/1522720.jpg?sw=2000",
    "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw923c59d9/images/1520000/1522721.jpg?sw=2000",
  ],
  description:
    "The Zürich sofa is your personal design statement with adjustable headrest and ultimate comfort. The sofa offers a light appearance making it perfect for both small and larger spaces as well as details that make it superb in both leather and fabric. It’s coziness and luxury in one perfect expression.",
  regular_price: 19890000,
  sale_price: 0,
  type: {
    _id: "65d4c0503be0d027038686e8",
    name: "sofas",
    thumb: "http://image.com",
    subTypes: ["New Price With Gift For Sofa"],
    is_draft: false,
    is_published: true,
    createdAt: "2024-02-20T15:08:00.972Z",
    updatedAt: "2024-02-21T08:27:40.958Z",
    slug: "chair",
    __v: 0,
  },
  attributes: {
    type: ["new-price-with-gift-for-sofa"],
    attributeType: {
      Height: {
        value: 96,
        unit: "cm",
      },
      Width: {
        value: 92,
        unit: "cm",
      },
      Depth: {
        value: 95,
        unit: "cm",
      },
      Length: {
        value: 99,
        unit: "cm",
      },
    },
  },
  model3D: "ABCssss",
  is_draft: true,
  is_published: false,
  createdAt: "2024-03-09T03:17:17.532Z",
  updatedAt: "2024-03-09T03:17:17.532Z",
  slug: "sofa-cheates-30",
};

const ProductEditForm = ({ data }) => {
  const { listAttribute } = useCreatingProductManagement();
  const { handleSelectType, handleSelectSubType } = useCreatingProductValues();

  const attributeArray = Object.keys(fakeData.attributes.attributeType).map(
    (key) => ({
      name: key,
      value: fakeData.attributes.attributeType[key].value,
      unit: fakeData.attributes.attributeType[key].unit,
    })
  );
  console.log(attributeArray);

  useEffect(() => {
    handleSelectType(fakeData.type.name.toLocaleLowerCase());
    handleSelectSubType(fakeData.attributes.type);
  }, []);

  const initialValues = {
    ...fakeData,
    type: fakeData.type.name.toLocaleLowerCase(),
    thumbs: fakeData.thumbs.map((item) => ({
      name: item,
      url: item,
    })),
  };
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    // const listImages = values.image.fileList.map((image) => image.url);
    // console.log(listImages);
    form.resetFields();
  };

  return (
    <div className="px-4 py-2">
      <Form
        layout="vertical"
        initialValues={initialValues}
        requiredMark="optional"
        form={form}
        labelAlign="left"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <FormInput
          required
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

        <div className="grid grid-cols-2 gap-4">
          <FormInputNumber
            label="Regular Pricing"
            required
            name="regular_price"
            placeholder="$$$"
          />
          <FormInputNumber
            label="Sale Pricing"
            required
            name="sale_price"
            placeholder="$$$"
          />
        </div>
        <FormSelectType />

        <FormSelectSubTypes />

        {/* {listAttribute?.map((attribute) => (
          <FormMeasurementInput
            required
            label={attribute.name}
            name={["attributes", "attributeType", attribute.name]}
            key={attribute._id}
          />
        ))} */}

        {/* {attributeArray.map((attribute)=>(
          <FormMeasurementInput
            required
            label={attribute.name}
            name={["attributes", "attributeType", attribute.name]}
            key={attribute._id}
          />
        ))} */}

        {listAttribute?.length
          ? listAttribute?.map((attribute) => (
              <FormMeasurementInput
                required
                label={attribute.name}
                name={["attributes", "attributeType", attribute.name]}
                key={attribute._id}
              />
            ))
          : attributeArray.map((attribute) => (
              <FormMeasurementInput
                required
                label={attribute.name}
                name={["attributes", "attributeType", attribute.name]}
                key={attribute._id}
              />
            ))}

        <FormUploadButton
          label="Display images"
          name="thumbs"
          defaultFileList={initialValues.thumbs}
        />

        <FormInput
          label="3D model's id"
          name="model3D"
          value=""
          placeholder="Write title here..."
        />

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" className="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

ProductEditForm.propTypes = {
  data: Proptypes.object,
};

export default ProductEditForm;
