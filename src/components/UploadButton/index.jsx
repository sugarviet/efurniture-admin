import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Proptypes from 'prop-types'
import { handleUploadImage } from "@utils/handleUploadImage";

const UploadButton = ({callback}) => {
    console.log(callback)
  return (
      <Upload
        multiple
        showUploadList
        customRequest={handleUploadImage}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
  );
};

UploadButton.propTypes = {
    callback: Proptypes.func.isRequired
}

export default UploadButton;
