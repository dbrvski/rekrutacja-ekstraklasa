export interface SeasonSchedule {
  generated_at: Date;
  schedules: Schedule[];
}

export interface Schedule {
  sport_event: SportEvent;
  sport_event_status: SportEventStatus;
}

export interface SportEventContext {
  sport: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
    country_code: string;
  };
  competition: {
    id: string;
    name: string;
    gender: string;
  };
  season: {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    year: string;
    competition_id: string;
  };
  stage: {
    order: number;
    type: string;
    phase: string;
    start_date: string;
    end_date: string;
    year: string;
  };
  round: {
    number: number;
  };
  groups: Array<{
    id: string;
    name: string;
  }>;
}

export interface Coverage {
  type: string;
  sport_event_properties: {
    lineups: boolean;
    venue: boolean;
    extended_player_stats: boolean;
    extended_team_stats: boolean;
    basic_play_by_play: boolean;
    basic_player_stats: boolean;
    basic_team_stats: boolean;
  };
}

export interface Competitor {
  id: string;
  name: string;
  country: string;
  country_code: string;
  abbreviation: string;
  qualifier: string;
  gender: string;
}

export interface Venue {
  id: string;
  name: string;
  capacity: number;
  city_name: string;
  country_name: string;
  map_coordinates: string;
  country_code: string;
  timezone: string;
}

export interface SportEvent {
  id: string;
  start_time: Date;
  start_time_confirmed: boolean;
  sport_event_context: SportEventContext;
  coverage: Coverage;
  competitors: Competitor[];
  venue: Venue;
  replaced_by: string;
}

export interface PeriodScore {
  home_score: number;
  away_score: number;
  type: string;
  number: number;
}

export interface SportEventStatus {
  status: string;
  match_status: string;
  home_score: number;
  away_score: number;
  winner_id: string;
  period_scores: PeriodScore[];
  match_tie?: boolean;
  decided_by_fed?: boolean;
}
