import { useGetAllEvents } from "@services/Events/services";

export function useEvents() {
  const { data: events, isLoading } = useGetAllEvents();

  return {
    events,
    isLoading,
  };
}
