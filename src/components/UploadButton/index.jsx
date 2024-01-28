import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Proptypes from "prop-types";
import { API_KEY, UPLOAD_IMG_URL } from "@config/uploadImage";
import { message } from "antd";
import axios from "axios";

const UploadButton = (props) => {
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
    <Upload
      {...props}
      multiple
      showUploadList
      customRequest={handleUploadImage}
    >
      <Button type="dashed" className="w-[50rem] h-[10rem]">
        <div className="flex flex-col gap-2">
        <span>Drag your photo here or browse from device</span>
        <span className="text-4xl"><UploadOutlined /></span>
        </div>
      </Button>
    </Upload>
  );
};

UploadButton.propTypes = {
  callback: Proptypes.func.isRequired,
};

export default UploadButton;
