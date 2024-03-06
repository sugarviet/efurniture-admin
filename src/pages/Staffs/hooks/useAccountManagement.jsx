import {
  disable_account,
  enable_account,
  get_all_system_account,
} from "@api/userApi";
import { useDelete } from "@hooks/api-hooks";
import useNotification from "@hooks/useNotification";

export default function useAccountManagement() {
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
  return {
    enableAccount,
    disableAccount,
  };
}
