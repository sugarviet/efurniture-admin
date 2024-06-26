/* eslint-disable react/prop-types */
import { Upload, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { API_KEY, UPLOAD_IMG_URL } from "@config/uploadImage";
import { message } from "antd";
import axios from "axios";
import FormItem from "../FormItem";
import { classNames } from "../../utils/classNames";
import Note from "../Note";

const FormUploadButton = (props) => {
  const { className, name, label, required,  defaultFileList,  maxCount = 4 } = props;

  const handleUploadImage = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.set("key", API_KEY);
    formData.append("image", file);

    try {
      const response = await axios.post(UPLOAD_IMG_URL, formData);

      if (response.status === 200 && response.data && response.data.data) {
        // Successful upload
        const imageUrl = response.data.data.url;

        file.url = imageUrl;

        onSuccess();
        message.success(`${file.name} uploaded successfully`);
      } else {
        onError();
        message.error(`Failed to upload ${file.name}`);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      onError(error);
      message.error(`Failed to upload ${file.name}`);
    }
  };
  const renderItem = (file) => (
    <image className="w-10 h-10" src={file.url} />
  );

  return (
    <Form.Item label={label} name={name} required>

      <Upload
        className="h-full"
        defaultFileList={defaultFileList}
        multiple
        maxCount={maxCount}
        listType="picture"
        showUploadList
        customRequest={handleUploadImage}
        renderItem={renderItem}

        accept=".png,.jpg,.jpeg"

      >
        <button
          type="button"
          className={classNames(
            "border-black p-4 flex flex-col items-center justify-center border-dashed border-[1px] rounded-xl",
            className
          )}
        >
          <span>Drag your photo here or browse from device</span>
          <UploadOutlined className="text-4xl" />
        </button>
      </Upload>
    </Form.Item>
  );
};

export default FormUploadButton;