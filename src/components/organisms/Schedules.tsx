import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import { ScheduleTable } from "../molecules/ScheduleTable";
import { useSeasonSchedule } from "../../hooks/useSeasonSchedule";
import { useCompetitionSeasons } from "../../hooks/useCompetitionSeasons";
export const Schedules = () => {
  const { data: seasons } = useCompetitionSeasons();
  const [seasonId, setSeasonId] = useState<string>("sr:season:77453");
  const { data: schedule } = useSeasonSchedule(seasonId);

  return (
    <Stack className="">
      {seasons && (
        <select
          className="btn btn-success"
          value={seasonId}
          onChange={(event) => {
            setSeasonId(String(event.target.value));
          }}
        >
          {seasons?.seasons.map((season) => (
            <option key={season.id} value={season.id}>
              {season.name}
            </option>
          ))}
        </select>
      )}

      {schedule && <ScheduleTable data={schedule} />}
    </Stack>
  );
};
