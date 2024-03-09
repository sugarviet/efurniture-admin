import { create_draft_type, get_draft_type } from "../../../api/typesApi";
import { useDelete, usePost, useUpdate } from "../../../hooks/api-hooks";
import useNotification from "@hooks/useNotification";

export default function useTypeManagement() {
  const { success_message, error_message } = useNotification();
  const { mutate: updateType } = useUpdate();
  const { mutate: createDraftType } = usePost(
    create_draft_type(),
    undefined,
    () => {
      success_message("types", "add_draft");
    },
    () => {},
    get_draft_type()
  );
  const { mutate: disableType } = useDelete();

  return {
    updateType,
    createDraftType,
    disableType,
  };
}
