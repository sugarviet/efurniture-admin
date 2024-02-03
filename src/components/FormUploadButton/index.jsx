/* eslint-disable react/prop-types */
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Proptypes from "prop-types";
import { API_KEY, UPLOAD_IMG_URL } from "@config/uploadImage";
import { message } from "antd";
import axios from "axios";
import FormItem from "../FormItem";

const FormUploadButton = (props) => {
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
  
  return (
    <FormItem {...props}>
      <Upload
        {...props}
        multiple
        showUploadList
        className="w-full"
        customRequest={handleUploadImage}
      >
        <Button type="dashed" className={`${"h-[10rem] w-full xl:w-[56rem] lg:w-[42rem]"} ${props.className}`}>
          <div className="flex flex-col gap-2">
          <span>Drag your photo here or browse from device</span>
          <span className="text-4xl"><UploadOutlined /></span>
          </div>
        </Button>
      </Upload>
    </FormItem>
  );
};

FormUploadButton.propTypes = {
  callback: Proptypes.func.isRequired,
};

export default FormUploadButton;
