export interface SimplifiedMatchStats {
  homeTeam: Team;
  awayTeam: Team;
  scoreHt?: string;
  teamNames: string;
  score: string;
  startTime: Date;
  venueName: string;
  sportEventId: string;
  postponed: boolean;
}

export interface Team {
  name: string;
  score: number;
  winner: boolean;
  draw?: boolean;
}
