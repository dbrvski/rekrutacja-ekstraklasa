import { SeasonSchedule } from "../types/SeasonSchedule";
import { SimplifiedMatchStats } from "../types/SimplifiedMatchStats";

export const scheduleRefactor = (
  data: SeasonSchedule
): SimplifiedMatchStats[] =>
  data.schedules.map((schedule) => {
    const homeTeam = schedule.sport_event.competitors[0].name;
    const awayTeam = schedule.sport_event.competitors[1].name;
    const awayTeamScore = schedule.sport_event_status.away_score;
    const homeTeamScore = schedule.sport_event_status.home_score;
    const startTime = schedule.sport_event.start_time;
    const venueName = schedule.sport_event.venue.name;
    const sportEventId = schedule.sport_event.id;
    const scoreHt = `${schedule.sport_event_status?.period_scores?.[0].home_score} - ${schedule.sport_event_status?.period_scores?.[0].away_score}`;
    return {
      homeTeam: {
        name: homeTeam,
        score: homeTeamScore,
        winner: homeTeamScore > awayTeamScore,
        draw: schedule.sport_event_status.match_tie,
      },
      awayTeam: {
        name: awayTeam,
        score: awayTeamScore,
        winner: awayTeamScore > homeTeamScore,
        draw: schedule.sport_event_status.match_tie,
      },
      teamNames: `${homeTeam} - ${awayTeam}`,
      score: `${homeTeamScore} - ${awayTeamScore}`,
      scoreHt,
      startTime,
      venueName,
      sportEventId,
    };
  });
