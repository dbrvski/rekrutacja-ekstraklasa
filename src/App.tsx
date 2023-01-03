import React from "react";
import { ScheduleTable } from "./components/ScheduleTable";
import { useSeasonSchedule } from "./hooks/useSeasonSchedule";

function App() {
  const query = useSeasonSchedule();

  return (
    <div className="App">
      <header className="App-header">
        <ScheduleTable />
        {query.data?.map((data) => data.awayTeam.score)}
      </header>
    </div>
  );
}

export default App;
