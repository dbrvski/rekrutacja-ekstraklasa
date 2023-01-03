import React from "react";
import { ScheduleTable } from "./components/ScheduleTable";
import { useSeasonSchedule } from "./hooks/useSeasonSchedule";

function App() {
  const query = useSeasonSchedule();

  return (
    <div className="App">
      <header className="App-header">
        <ScheduleTable />
      </header>
    </div>
  );
}

export default App;
