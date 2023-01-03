import React from "react";
import { Team } from "../../types/SimplifiedMatchStats";
interface TeamNameProps {
  team: Team;
}

export const TeamName = ({ team }: TeamNameProps) => {
  return (
    <div
      style={{
        backgroundColor: team.draw ? "orange" : team.winner ? "green" : "red",
      }}
    >
      {team.name}
    </div>
  );
};
