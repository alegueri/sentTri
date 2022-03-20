import { useEffect, useState } from "react";

// https://github.com/img-mapper/react-img-mapper
import ImageMapper from "react-img-mapper";
import axios from "axios";
import { Container, List, ListGroupItem, Row, Col } from "reactstrap";

const IMAGE_URL =
  "https://raw.githubusercontent.com/alegueri/TriAuto/main/My%20project%20(1).jpg";
const MAP_URL =
  "https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json";

export default function ImageMap() {
  const [areas, setAreas] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);

  useEffect(() => {
    axios.get(MAP_URL).then(({ data }) => setAreas(data));
  }, []);

  const handleMouseEnterArea = (area, index, event) => {
    setHoveredArea(area);
  };

  const handleMouseLeaveArea = (area, index, event) => {
    setHoveredArea(null);
  };

  const handleAreaClick = (area, index, event) => {
    //
  };

  if (!areas) return "Loading";

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col>
          <ImageMapper
            src={IMAGE_URL}
            map={{
              name: "asdf",
              areas: areas
            }}
            stayMultiHighlighted
            onMouseEnter={handleMouseEnterArea}
            onMouseLeave={handleMouseLeaveArea}
            onClick={handleAreaClick}
          />
        </Col>

      </Row>
    </Container>
  );
}
