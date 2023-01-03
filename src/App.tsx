import React, { useState } from "react";

import { ScheduleTable } from "./components/molecules/ScheduleTable";
import { useSeasonSchedule } from "./hooks/useSeasonSchedule";
import { useCompetitionSeasons } from "./hooks/useCompetitionSeasons";
function App() {
  const { data: seasons } = useCompetitionSeasons();
  const [seasonId, setSeasonId] = useState<string>("sr:season:77453");
  const { data: schedule } = useSeasonSchedule(seasonId);

  return (
    <div className="App">
      <header className="App-header">
        {seasons && (
          <select
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

        <ScheduleTable data={schedule} />
      </header>
    </div>
  );
}

export default App;
