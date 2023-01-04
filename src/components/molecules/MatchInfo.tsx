import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useSportEventTimeline } from "../../hooks/useSportEventTimeline";
import { Row } from "../atoms/Row";
import { filterTimeline } from "../../utils/filterTimeline";

export const MatchInfo = () => {
  const { eventId } = useParams();
  const query = useSportEventTimeline(eventId);
  return (
    <Container>
      {query.data && (
        <Table striped bordered hover responsive>
          <thead>
            <Stack as="tr" direction="horizontal">
              <Col
                as="th"
                className="text-center lead"
              >{`${query.data?.sport_event?.competitors?.[0].name}`}</Col>
              <Col
                xs={1}
                className="d-flex gap-3 align-items-center justify-content-center"
                as="th"
              >
                {query.data?.sport_event_status.home_score} -
                {query.data?.sport_event_status.away_score}
              </Col>
              <Col
                className="text-center lead"
                as="th"
              >{`${query.data?.sport_event?.competitors?.[1].name}`}</Col>
            </Stack>
          </thead>

          <tbody>
            {filterTimeline(query.data?.timeline).map((event) => (
              <Row
                key={event.id}
                competitor={event.competitor}
                text={event.commentaries}
                time={event.match_clock}
                event={event.type}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
