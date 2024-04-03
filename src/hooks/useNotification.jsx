import { message } from "antd";
import { useQueryClient } from '@tanstack/react-query';
import { get_all_notification } from "../api/notificationApi";

const type = {
  warehouse: {
    success: {
      add: 'Successfully added warehouse',
      edit: 'Successfully edited warehouse',
      delete: 'Successfully deleted delete',
      add_product: 'Successfully added product to warehouse',
      update_stock: 'Successfully updated stock',
      update_low_stock: 'Successfully updated low stock',
      receive_low_stock: 'Successfully received low stock',
    },
    fail: {
      add: 'Failed added warehouse',
      edit: 'Failed edited warehouse',
      delete: 'Failed deleted delete',
      add_product: 'Failed added product to warehouse',
      update_stock: 'Failed updated stock',
      update_low_stock: 'Failed updated low stock',
      receive_low_stock: 'Failed received low stock',
    }
  },
  address: {
    success: {
      add: 'Successfully added address',
      edit: 'Successfully edited address',
      delete: 'Successfully deleted delete',
      set_default: 'Successfully set default address',
    },
    fail: {
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
    fail: {
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
    fail: {
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
      publish: 'Successfully publish types',
      draft: 'Successfully draft types',
      enable: 'Successfully enable types',
    },
    fail: {
      add_draft: 'Failed added draft types',
      edit: 'Failed edited types',
      disable: 'Failed disable types',
      publish: 'Failed publish types',
      draft: 'Failed draft types',
      enable: 'Failed enable types',
    }
  },
  subtypes: {
    success: {
      add_draft: 'Successfully add draft subtypes',
      edit: 'Successfully edited subtypes',
      disable: 'Successfully disable subtypes',
      publish: 'Successfully publish subtypes',
      draft: 'Successfully draft subtypes',
      enable: 'Successfully enable subtypes',
    },
    fail: {
      add_draft: 'Failed added draft subtypes',
      edit: 'Failed edited subtypes',
      disable: 'Failed disable subtypes',
      publish: 'Failed publish subtypes',
      draft: 'Failed draft subtypes',
      enable: 'Failed enable subtypes',
    }
  },
  products: {
    success: {
      add_draft: 'Successfully add draft product',
      edit: 'Successfully edited product',
      publish: 'Successfully publish product',
      draft: 'Successfully draft product',
      disable: 'Successfully disable product',
      enable: 'Successfully enable product',
    },
    fail: {
      add_draft: 'Failed added draft product',
      edit: 'Failed edited product',
      disable: 'Failed disable product',
      publish: 'Failed publish product',
      draft: 'Failed draft product',
      enable: 'Failed enable product',
    }
  },
  flashsale: {
    success: {
      add: 'Successfully add flash sale',
      edit: 'Successfully edited flash sale',
      disable: 'Successfully disable flash sale',
      enable: 'Successfully enable flash sale',
    },
    fail: {
      add: 'Failed added flash sale',
      edit: 'Failed edited flash sale',
      disable: 'Failed disable flash sale',
      enable: 'Failed enable flash sale',
    }
  },
  login: {
    success: {
      login: 'Successfully logged in'
    },
    fail: {
      login: 'Failed to login in'
    }
  }

}

function useNotification() {
  const queryClient = useQueryClient();

  const refreshNotification = () => {
    queryClient.invalidateQueries(get_all_notification());

  }

  const success_message = (msg, action, custom) => {
    message.success(custom ? custom : type[msg].success[action]);
  };
  const error_message = (msg, action, custom) => {
    message.error(custom ? custom : type[msg].fail[action]);

  };
  return {
    success_message,
    error_message,
    refreshNotification
  };
}

export default useNotification;
