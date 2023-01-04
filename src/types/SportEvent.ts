export interface SportEventType {
  generated_at: string;
  sport_event: SportEvent;
  sport_event_status: SportEventStatus;
  statistics: Statistics;
  timeline: Timeline[];
}

export interface Sport {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Competition {
  id: string;
  name: string;
  gender: string;
}

export interface Season {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  year: string;
  competition_id: string;
}

export interface Stage {
  order: number;
  type: string;
  phase: string;
  start_date: string;
  end_date: string;
  year: string;
}

export interface Round {
  name: string;
  cup_round_sport_event_number: number;
  cup_round_number_of_sport_events: number;
  cup_round_id: string;
}

export interface Group {
  id: string;
  name: string;
}

export interface SportEventContext {
  sport: Sport;
  category: Category;
  competition: Competition;
  season: Season;
  stage: Stage;
  round: Round;
  groups: Group[];
}

export interface SportEventProperties {
  lineups: boolean;
  venue: boolean;
  extended_player_stats: boolean;
  extended_team_stats: boolean;
  lineups_availability: string;
  ballspotting: boolean;
  commentary: boolean;
  fun_facts: boolean;
  goal_scorers: boolean;
  scores: string;
  game_clock: boolean;
  deeper_play_by_play: boolean;
  deeper_player_stats: boolean;
  deeper_team_stats: boolean;
  basic_play_by_play: boolean;
  basic_player_stats: boolean;
  basic_team_stats: boolean;
}

export interface Coverage {
  type: string;
  sport_event_properties: SportEventProperties;
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

export interface Referee {
  id: string;
  name: string;
  nationality: string;
  country_code: string;
  type: string;
}

export interface Attendance {
  count: number;
}

export interface Ground {
  neutral: boolean;
}

export interface Lineups {
  confirmed: boolean;
}

export interface SportEventConditions {
  referees: Referee[];
  attendance: Attendance;
  ground: Ground;
  lineups: Lineups;
}

export interface SportEvent {
  id: string;
  start_time: Date;
  start_time_confirmed: boolean;
  sport_event_context: SportEventContext;
  coverage: Coverage;
  competitors: Competitor[];
  venue: Venue;
  sport_event_conditions: SportEventConditions;
}

export interface PeriodScore {
  home_score: number;
  away_score: number;
  type: string;
  number: number;
}

export interface BallLocation {
  order: number;
  x: number;
  y: number;
  qualifier: string;
}

export interface MatchSituation {
  status: string;
  qualifier: string;
  updated_at: Date;
}

export interface SportEventStatus {
  status: string;
  match_status: string;
  home_score: number;
  away_score: number;
  home_normaltime_score: number;
  away_normaltime_score: number;
  home_overtime_score: number;
  away_overtime_score: number;
  winner_id: string;
  period_scores: PeriodScore[];
  ball_locations: BallLocation[];
  match_situation: MatchSituation;
}

export interface Statistics2 {
  ball_possession: number;
  cards_given: number;
  corner_kicks: number;
  fouls: number;
  free_kicks: number;
  goal_kicks: number;
  injuries: number;
  offsides: number;
  red_cards: number;
  shots_blocked: number;
  shots_off_target: number;
  shots_on_target: number;
  shots_saved: number;
  shots_total: number;
  substitutions: number;
  throw_ins: number;
  yellow_cards: number;
  yellow_red_cards: number;
}

export interface Statistics3 {
  assists: number;
  corner_kicks: number;
  goals_scored: number;
  offsides: number;
  own_goals: number;
  red_cards: number;
  shots_blocked: number;
  shots_off_target: number;
  shots_on_target: number;
  substituted_in: number;
  substituted_out: number;
  yellow_cards: number;
  yellow_red_cards: number;
}

export interface Player {
  statistics: Statistics3;
  id: string;
  name: string;
  starter: boolean;
}

export interface Competitor2 {
  id: string;
  name: string;
  abbreviation: string;
  qualifier: string;
  statistics: Statistics2;
  players: Player[];
}

export interface Totals {
  competitors: Competitor2[];
}

export interface Statistics {
  totals: Totals;
}

export interface Commentary {
  text: string;
}

export interface Player2 {
  id: string;
  name: string;
  type: string;
}

export interface Timeline {
  id: number;
  type: string;
  time: Date;
  commentaries: Commentary[];
  period?: number;
  period_type: string;
  period_name: string;
  match_time?: number;
  match_clock: string;
  competitor: "home" | "away";
  x?: number;
  y?: number;
  players: Player2[];
  home_score?: number;
  away_score?: number;
  outcome: string;
  stoppage_time?: number;
  stoppage_time_clock: string;
  injury_time_announced?: number;
  break_name: string;
  status: string;
  method: string;
  shootout_home_score?: number;
  shootout_away_score?: number;
}
