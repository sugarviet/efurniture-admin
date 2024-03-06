import {
  disable_account,
  enable_account,
  get_all_system_account,
  create_user,
  update_account
} from "@api/userApi";
import { useDelete, usePost, useUpdate } from "@hooks/api-hooks";
import useNotification from "@hooks/useNotification";

export default function useAccountManagement(accountId) {
  const { success_message, error_message } = useNotification();
  const { mutate: enableAccount } = useDelete(
    enable_account(),
    undefined,
    () => {
      success_message("staffs", "enable");
    },
    () => {
      error_message("staffs", "enable");
    },
    get_all_system_account()
  );

  const { mutate: disableAccount } = useDelete(
    disable_account(),
    undefined,
    () => {
      success_message("staffs", "disable");
    },
    () => {
      error_message("staffs", "disable");
    },
    get_all_system_account()
  );
  const { mutate: addAccount } = usePost(
    create_user(),
    undefined,
    () => {
      success_message("staffs", "add");
    },
    () => {
      error_message("staffs", "add");
    },
    get_all_system_account()
  );
  const { mutate: updateRole } = useUpdate(
    update_account(accountId),
    undefined,
    () => {
      success_message("staffs", "edit");
    },
    () => {
      error_message("staffs", "edit");
    },
    get_all_system_account()
  );
  return {
    enableAccount,
    disableAccount,
    addAccount,
    updateRole
  };
}
