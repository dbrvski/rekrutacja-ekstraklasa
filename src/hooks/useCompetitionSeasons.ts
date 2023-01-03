import { getCompetitionSeasons } from "../services/soccerServices";
import { useQuery } from "@tanstack/react-query";

export const useCompetitionSeasons = (
  competitionId: string = "sr:competition:202"
) => {
  const query = useQuery(["competition", competitionId], () =>
    getCompetitionSeasons(competitionId)
  );

  return query;
};
