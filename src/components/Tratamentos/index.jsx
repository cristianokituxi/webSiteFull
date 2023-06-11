
import React, { useState } from 'react';
import "./style.scss"

import img from "../images/imgcon1.png"
import img1 from "./images/catarata.png"
import img2 from "./images/yag-laser.jpg"
import img3 from "./images/crosslink.jpeg"
import img4 from "./images/refrator-laser.jpg"


import { Accordion } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';



const consultas = [
  {
    id: 1,
    name: 'Cirugia da catarata com implante de lente intra ocular',
    nikName:'Nessa cirurgia, retiramos a lente intra ocular natural do olho (cristalino) que está doente para implantar uma lente artificial em seu lugar. Importante destacar que temos os melhores aparelhos disponíveis no mercado para realizar uma cirurgia com os mesmos níveis de segurança alcançados nos melhores centros de oftalmologia do Brasil e do mundo.(em breve será disponibilizado neste espaço um link com maiores informações sobre a cirurgia de catarata)Além disso, temos acesso a todas as lentes intra oculares que estão registradas no Brasil, desde as lentes ofertadas pelos planos de saúde até as especiais, com objetivo de proporcionar os melhores resultados visuais para cada paciente, respeitando sua individualidade. (para saber mais sobre lentes intra oculares, clique aqui: link para lentes)',  
    img: img1,
    url: " https://www.leica-microsystems.com/products/surgical-microscopes/p/leica-m620-f20/"
  },

]

const implante = [
  {
    id: 2,
    name: ' Yag Laser para capsulotomia (limpeza de lente pós cirurgia de catarata)',
    nikName:"Procedimento em que aplicamos um laser na parte posterior da lente intra ocular implantada, com objetivo de eliminar opacidades atrás da lente intra ocular causada pelo crescimento de células do próprio olho e que acabam por embaçar um pouco a visão alguns meses ou anos após a cirurgia de catarata.",
    img: img2,
    url: "https://houseofvision.com.br/equipamentos/yag-laserslt-deux/"
  },
  {
    id: 3,
    name: ' Tratamento clinico do ceratocone com adaptação de lentes  de contato gelatinosas, rígidas, multicurvas e esclerais. ',
    nikName:"",
    url: ""
  },

  {
    id: 4,
    name: 'Cirurgia de Anel intra corneano para ceratocone (manual e com laser de femtosegundo)',
    nikName:"Cirurgia de implante de anel intra corneano também conhecido como anel de ferrara com intuito de melhorar a forma da córnea em pacientes com ceratocone. Essa cirurgia pode ser realizada com técnica manual ou com laser, sendo esta última realizada por mim em Cuiabá.(em breve disponibilizaremos um link com mais informações)",
    url: ""
  },


]

const cirurgiaLaser = [
  {
    id: 6,
    name: 'Cross Linking para ceratocone',
    nikName:"Cirurgia com objetivo de tentar estabilizar o ceratocone em pacientes que documentamos que a doença está progredindo.",
    url: "",
    img: img3
  },
  {
    id: 10,
    name: 'Iridotomia a laser para glaucoma',
    nikName:"Cirurgia realizada naqueles pacientes em que identificamos possuir um chamado ângulo estreito, ou seja, pacientes com potencial para desenvolver um glaucoma de ângulo estreito.",
    url: ""

  },
  {
    id: 8,
    name: 'Cirurgia de Glaucoma (trabeculectomia- TREC)',
    nikName:"Cirurgia em que criamos uma pequena abertura no olho denominada fístula com intuito de diminuir a pressão intra ocular e impedir a evolução da doença.",
    url: ""
  },


  {
    id: 9,
    name: 'Cirurgia a laser para glaucoma (trabeculoplastia seletiva – SLT)',
    nikName:"Cirurgia a laser com objetivo onde aplicamos uma energia predeterminada em uma região dos olhos conhecida como trabeculado (região responsável pela drenagem do líquido de dentro do olho), com intuito de aumentar a eficiência do seu trabalho e diminuir a pressão intra ocular.",
    url: "",
    img: img4

  },

  {
    id: 5,
    name: 'cirurgia à laser realizada em Cuiabá, em parceria com hospital de olhos de Cuiaba.',
    nikName:"",
    url: "",
    img: img4
  },

  {
    id: 7,
    name: 'Cirurgia de Pterígio com auto transplante conjuntival e cola biológica (sem pontos)',
    nikName:'Cirurgia para retirar o pterígio (“carne crescida”) dos olhos, realizada com a técnica considerada mais eficaz para evitar a recidiva da visão (auto transplante conjuntival) e a de realização mais rápida e confortável para o paciente (com uso de cola biológica e sem pontos).   Em alguns pacientes especiais, ainda podemos utilizar a mitomicina (medicamento que diminui a chance de recidiva em paciente com aumento do risco). Não utilizado em todos os pacientes pelo seu maior potencial de toxicidade.',
    url: ""
  },

  {
    id: 11,
    name: ' Cirurgia a laser para correção de grau de miopia, astigmatismo e hipermetropia (PRK, LASIK e SMILE)',
    nikName:"Cirurgias utilizadas com objetivo de eliminar o grau dos pacientes (miopia, astigmatismo e hipermetropia) e deixa-los mais indepentende dos óculos.",
    url: "",
    img: img4

  },
]


const CirurgiasEtratamento = () => {
  const [activeId, setActiveId] = useState(2);

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <>
      <div className='container-cirurgia  justify-content-center'>
        <Container className='d-block'>
          <Row className="mt-3">
            <Col xs={12} md={12}>
              <Accordion
                key='1' eventKey='1'
                onClick={() => toggleActive(1)}
                className={activeId === 1 ? "active" : null}
              >
                <Accordion.Item >
                  <Accordion.Header
                  >
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt='logotipo'
                      />
                    </Col>
                    <Col>
                      <h6 className='text-center'>EM PACERIA COM DRA. SILVANE BIGOLIN/INSTITUTO DA VISÃO</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {consultas.map((item) => {
                        return (
                          <>

                            <Accordion key={item.id} >
                              <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
                                  <Col sm={1}>
                                    <img
                                      className="d-flex m-auto"
                                      width="70"
                                      height="35"
                                      src={img}
                                      alt={item.name}
                                    />
                                  </Col>
                                  <Col>
                                    <h6 className='text-center'>{item.name}</h6>
                                  </Col>


                                </Accordion.Header>
                                <Accordion.Body>
                                  <Row sm={12}>
                                    <Col sm={6}>
                                      <Row sm={6}>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.img}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p>{item.nikName}</p>
                                    </Row>
                                  </Row>

                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            <p className="text tex-center ">

                            </p>


                          </>

                        )


                      })

                      }
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={12}>
              <Accordion
                key='2' eventKey='2'
                onClick={() => toggleActive(1)} defaultActiveKey={['2']}
                className={activeId === 1 ? "active" : null}
              >
                <Accordion.Item >
                  <Accordion.Header
                  >
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt='logotipo'
                      />
                    </Col>
                    <Col>
                      <h6 className='text-center'>IMPLANTE DE TODAS AS LENTES INTRA OCULARES DISPONÍVEIS NO MERCCADO OFTAMOLÓGICO   <br /> PARA EXCELÊNCIA EM RESULTADO EM RESULTADO DE CIRURGIA DE CATARATA</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {implante.map((item) => {
                        return (
                          <>

                            <Accordion key={item.id} >
                              <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
                                  <Col sm={1}>
                                    <img
                                      className="d-flex m-auto"
                                      width="70"
                                      height="35"
                                      src={img}
                                      alt={item.name}
                                    />
                                  </Col>
                                  <Col>
                                    <h6 className='text-center'>{item.name}</h6>
                                  </Col>


                                </Accordion.Header>
                                <Accordion.Body>
                                  <Row sm={12}>
                                    <Col sm={6}>
                                      <Row sm={6}>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.img}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p>{item.nikName}</p>
                                    </Row>
                                  </Row>

                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>

                            <p className="text tex-center ">

                            </p>

                          </>

                        )


                      })

                      }
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="mt-3 mb-3" >
            <Col xs={12} md={12}>
              <Accordion
                key='3' eventKey='3' defaultActiveKey={['3']}
                onClick={() => toggleActive(2)}
                className={activeId === 2 ? "active" : null}
              >
                <Accordion.Item >
                  <Accordion.Header
                  >
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt='logotipo'
                      />
                    </Col>
                    <Col>
                      <h6 className='text-center'>CIRURGIAS À LASER REALIZADA EM  CUIABÁ, EM PARCERIA COM HOSPITAL DE OLHOS DE CUIBÁ</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {cirurgiaLaser.map((item) => {
                        return (
                          <>

                            <Accordion key={item.id} >
                              <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
                                  <Col sm={1}>
                                    <img
                                      className="d-flex m-auto"
                                      width="70"
                                      height="35"
                                      src={img}
                                      alt={item.name}
                                    />
                                  </Col>
                                  <Col>
                                    <h6 className='text-center'>{item.name}</h6>
                                  </Col>


                                </Accordion.Header>
                                <Accordion.Body>
                                  <Row sm={12}>
                                    <Col sm={6}>
                                      <Row sm={6}>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.img}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p>{item.nikName}</p>
                                    </Row>
                                  </Row>

                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>


                            <p className="text tex-center ">

                            </p>
                          </>

                        )


                      })

                      }
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
};

export default CirurgiasEtratamento;