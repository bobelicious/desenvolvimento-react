import { Col, Container, Row } from "react-bootstrap";
import Topico from "./Topico";
import React, { useState } from "react";

function Competencias() {
  let estilo = {
    marginTop: "200px", 
  };

  const lista = [
    {id:1, nome:"Missão de vida", descricao:"Minha missão de vida é poder ser o provedor de minha família, poder ajudar a comunidade através da tecnologia e deixar minha marca na comunidade tecnológica."},
    {id:2, nome:"Minhas forças"}
  ]

  let checker = "❌";

  let [lido, setLido] = useState(checker);

  let qualquerCoisa = () => {
    let taBom = () => {
      if (checker == "❌") {
        checker = "✔️";
        return checker;
      } else checker = "❌";
      return checker;
    };
    setLido(taBom);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Topico
            lido={lido}
            modificar={qualquerCoisa}
            nome=
            descricao="Minha missão de vida é poder ser o provedor de minha família, 
          poder ajudar a comunidade através da tecnologia e deixar minha marca na comunidade tecnológica."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Topico
            nome="Minhas forças"
            descricao="Quando me sinto motivado em algo foco minha atenção toda aquilo, 
            sempre penso em como eu posso melhorar algo que eu fiz ou como melhorar como pessoa, penso no próximo, 
            sou analítico naquilo em que eu faço, e possuo bom raciocínio lógico."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Topico
            nome="Minhas fraquezas"
            descricao="Tenho dificuldades de me expor e me impor, tenho dificuldade em reconhecer minhas conquistas,
          tenho tendências a ser competitivo e posso ficar frustrado se não atendo as minhas expectativas"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Topico
            nome="Meu trabalho para constante progresso "
            descricao="Analisar o que tenho feito e ver o que posso melhorar, dedicar maior parte do meu tempo naquilo em que me disponho a fazer, 
            buscar saber mais sobre aquilo que faço, imaginar novas possibilidades e maneiras diferentes de fazer a mesma coisa. "
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Topico
            nome="Crenças e valores "
            descricao="Honestidade, gratidão, generosidade, humildade e nunca esquecer de onde veio
             e quem o acompanhou na sua jornada de vida e agradecer as experiências que cada um te proporcionou. "
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Topico
            nome="Metas curto e longo prazo "
            descricao="A curto prazo desejo me formar com êxito no curso do serratec e ingressar no mercado de trabalho, 
            a médio prazo desejo iniciar estudos na área de programação e me aprofundar principalmente em back end. "
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Competencias;
