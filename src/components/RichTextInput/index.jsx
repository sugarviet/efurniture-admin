import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextInput = (props) => {
  return (
    <div>
      <ReactQuill theme="snow" {...props} />
    </div>
  )
}

export default RichTextInput
