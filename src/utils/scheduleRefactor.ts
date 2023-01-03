import { SeasonSchedule } from "../types/SeasonSchedule";
import { SimplifiedMatchStats } from "../types/SimplifiedMatchStats";

export const scheduleRefactor = (
  data: SeasonSchedule
): SimplifiedMatchStats[] =>
  data.schedules.map((schedule) => {
    const homeTeamScore = schedule.sport_event_status.home_score;
    const homeTeam = schedule.sport_event.competitors[0].name;
    const awayTeam = schedule.sport_event.competitors[1].name;
    const awayTeamScore = schedule.sport_event_status.away_score;
    const startTime = schedule.sport_event.start_time;
    const venueName = schedule.sport_event.venue.name;
    const sportEventId = schedule.sport_event.id;

    return {
      homeTeam: {
        name: homeTeam,
        score: homeTeamScore,
      },
      awayTeam: {
        name: awayTeam,
        score: awayTeamScore,
      },
      teamNames: `${homeTeam} - ${awayTeam}`,
      score: `${homeTeamScore} - ${awayTeamScore}`,
      startTime,
      venueName,
      sportEventId,
    };
  });
