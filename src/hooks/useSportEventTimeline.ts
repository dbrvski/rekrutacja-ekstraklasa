import { getSportEventTimeline } from "../services/soccerServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useSportEventTimeline = (sportEventId: string | undefined) => {
  const query = useQuery(
    ["event", sportEventId],
    () => getSportEventTimeline(sportEventId),
    {
      enabled: Boolean(sportEventId),
      onError: (err) => toast.error((err as Error).message),
    }
  );

  return query;
};
