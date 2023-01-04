import BootstrapRow from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "./Icon";

interface RowProps {
  competitor: "home" | "away";
  time: string;
  text: { text: string }[];
  event: string;
}

export const Row = ({ competitor, time, text, event }: RowProps) => {
  console.log(event);
  return (
    <BootstrapRow as="tr">
      <Col
        className="d-flex justify-content-between gap-3 align-items-center"
        as="td"
      >
        {competitor === "home" && (
          <>
            <div className="ps-3">{text?.map((t) => t.text)}</div>
            <div>
              <Icon event={event} />
            </div>
          </>
        )}
      </Col>
      <Col
        xs={1}
        className="d-flex gap-3 align-items-center justify-content-center"
        as="td"
      >
        <span>{time}</span>
      </Col>
      <Col className="d-flex gap-3 align-items-center" as="td">
        {competitor === "away" && (
          <>
            <div>
              <Icon event={event} />
            </div>
            <div className="p-1">{text?.map((t) => t.text)}</div>
          </>
        )}
      </Col>
    </BootstrapRow>
  );
};
