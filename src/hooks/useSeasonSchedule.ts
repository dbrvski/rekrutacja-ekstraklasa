import { getSeasonSchedule } from "../services/soccerServices";
import { useQuery } from "@tanstack/react-query";
import { scheduleRefactor } from "../utils/scheduleRefactor";

export const useSeasonSchedule = (seasonId: string = "sr:season:77453") => {
  const query = useQuery(
    ["schedule", seasonId],
    () => getSeasonSchedule(seasonId),
    {
      select: (data) => scheduleRefactor(data),
    }
  );

  return query;
};
