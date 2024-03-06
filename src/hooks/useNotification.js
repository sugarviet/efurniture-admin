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
  },
  types: {
    success: {
      add_draft: 'Successfully add draft types',
      edit: 'Successfully edited types',
      disable: 'Successfully disable types',
      enable: 'Successfully enable types',
    },
    fail:{
      add_draft: 'Failed added draft types',
      edit: 'Failed edited types',
      disable: 'Failed disable types',
      enable: 'Failed enable types',
    }
  }
}

function useNotification() {
  const success_message = (msg, action, custom) => {
    console.log( type[msg].success[action]);
    message.success(custom ? custom: type[msg].success[action]);
  };
  const error_message = (msg, action, custom) => {
    message.success(custom ? custom : type[msg].fail[action]);

  };
  return {
    success_message,
    error_message,
  };
}

export default useNotification;
