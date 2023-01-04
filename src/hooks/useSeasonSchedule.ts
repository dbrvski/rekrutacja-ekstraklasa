import { getSeasonSchedule } from "../services/soccerServices";
import { useQuery } from "@tanstack/react-query";
import { scheduleRefactor } from "../utils/scheduleRefactor";
import { toast } from "react-hot-toast";

export const useSeasonSchedule = (seasonId: string = "sr:season:77453") => {
  const query = useQuery(
    ["schedule", seasonId],
    () => getSeasonSchedule(seasonId),
    {
      select: (data) => scheduleRefactor(data),
      onError: (err) => toast.error((err as Error).message),
    }
  );

  return query;
};
