import { Timeline } from "../types/SportEvent";

const events = [
  "score_change",
  "yellow_card",
  "red_card",
  "injury",
  "shot_on_target",
];

export const filterTimeline = (timeline: Timeline[]) =>
  timeline.filter((time) => events.includes(time.type));
