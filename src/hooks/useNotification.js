import { message } from "antd";


const type = {
  address: {
    success: {
      add: 'Successfully added address',
      edit: 'Successfully edited address',
      delete: 'Successfully deleted delete',
      set_default: 'Successfully set default address',
    },
    fail:{
      add: 'Failed added address',
      edit: 'Failed edited address',
      delete: 'Failed deleted delete',
      set_default: 'Failed set default address',
    }
  }
}

function useNotification() {
  const success_message = (msg, action, custom) => {
    message.success(custom ? type[msg].success[action]: custom);
  };
  const error_message = (msg, action, custom) => {
    message.success(custom ? type[msg].fail[action] : custom);

  };
  return {
    success_message,
    error_message,
  };
}

export default useNotification;
