import Cabecalho from "./Cabecalho";
import Nome from "./Nome";
import Foto from "./Foto";
import Competencias from "./Competencias";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CurriculoMain() {

  return (
    <>
      <Container id="navBar" style={{ background: "#000000" }} fluid>
        <Row>
          <Col sm={12}>
            <Cabecalho />
          </Col>
        </Row>
      </Container>
      <Container style={{marginBottom:"50px", marginTop:"50px"}}>
        <Row>
          <Col sm="auto">
            <Foto />
          </Col>
          <Col sm="auto">
            <Nome nome="Augusto Marley Costa Pereira" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Competencias />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CurriculoMain;
