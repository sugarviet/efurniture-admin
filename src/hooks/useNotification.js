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
  },
  staffs: {
    success: {
      add: 'Successfully added staff',
      edit: 'Successfully edited staff',
      disable: 'Successfully disable staff',
      enable: 'Successfully enable staff',
    },
    fail:{
      add: 'Failed added staff',
      edit: 'Failed edited staff',
      disable: 'Failed disable staff',
      enable: 'Failed enable staff',
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
