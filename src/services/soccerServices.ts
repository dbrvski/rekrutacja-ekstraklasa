import { api } from "../config/axios";
import { Seasons } from "../types/Seasons";
import { SeasonSchedule } from "../types/SeasonSchedule";

export const getSeasonSchedule = async (
  seasonId: string = "sr:season:77453"
) => {
  const res = await api.get<SeasonSchedule>(
    `seasons/${seasonId}/schedules.json`
  );
  return res.data;
};

export const getCompetitionSeasons = async (
  competitionId: string = "sr:competition:202"
) => {
  const res = await api.get<Seasons>(
    `competitions/${competitionId}/seasons.json`
  );
  return res.data;
};
