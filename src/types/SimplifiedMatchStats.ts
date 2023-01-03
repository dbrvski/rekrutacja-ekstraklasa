export interface SimplifiedMatchStats {
  homeTeam: {
    name: string;
    score: number;
  };
  awayTeam: {
    name: string;
    score: number;
  };
  teamNames: string;
  score: string;
  startTime: Date;
  venueName: string;
  sportEventId: string;
}
