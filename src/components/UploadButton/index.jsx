import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Proptypes from 'prop-types'
import useUploadImage from "../../hooks/useUploadImage";

const UploadButton = ({callback}) => {
    console.log(callback)
const {handleUploadImage} = useUploadImage();
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
