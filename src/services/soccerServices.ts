import { api } from "../config/axios";
import { SeasonSchedule } from "../types/SeasonSchedule";

export const getSeasonSchedule = async (
  seasonId: string = "sr:season:77453"
) => {
  const res = await api.get<SeasonSchedule>(
    `seasons/${seasonId}/schedules.json`
  );
  return res.data;
};
