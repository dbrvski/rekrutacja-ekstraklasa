import { getCompetitionSeasons } from "../services/soccerServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useCompetitionSeasons = (
  competitionId: string = "sr:competition:202"
) => {
  const query = useQuery(
    ["competition", competitionId],
    () => getCompetitionSeasons(competitionId),
    {
      onError: (err) => toast.error((err as Error).message),
    }
  );

  return query;
};
