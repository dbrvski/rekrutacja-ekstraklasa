export interface Seasons {
  generated_at: string;
  seasons: Array<{
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    year: string;
    competition_id: string;
  }>;
}
