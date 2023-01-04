import { Team } from "../../types/SimplifiedMatchStats";
import cs from "classnames";
interface TeamNameProps {
  team: Team;
}

export const TeamName = ({ team }: TeamNameProps) => {
  return (
    <div
      className={cs(
        { "text-warning": team.draw },
        { "text-success": team.winner },
        { "text-danger": !team.winner && !team.draw }
      )}
    >
      {team.name}
    </div>
  );
};
