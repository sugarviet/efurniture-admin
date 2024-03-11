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
  attribute: {
    success: {
      add: 'Successfully added attribute',
      edit: 'Successfully edited attribute',
      disable: 'Successfully disable attribute',
      enable: 'Successfully enable attribute',
    },
    fail:{
      add: 'Failed added attribute',
      edit: 'Failed edited attribute',
      disable: 'Failed disable attribute',
      enable: 'Failed enable attribute',
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
  },
  products: {
    success: {
      add_draft: 'Successfully add draft product',
      edit: 'Successfully edited product',
      disable: 'Successfully disable product',
      enable: 'Successfully enable product',
    },
    fail:{
      add_draft: 'Failed added draft product',
      edit: 'Failed edited product',
      disable: 'Failed disable product',
      enable: 'Failed enable product',
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
