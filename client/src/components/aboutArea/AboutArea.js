import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutArea = () => {
  return (
    <section>
      <Container>
        <Row lg={2} md={2} xs={1}>
          <Col className="mb-5">
            <Image
              src="https://images.unsplash.com/photo-1599677100066-edddd69b70e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1ZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              fluid
            />
          </Col>
          <Col>
            <div className="text-white">
              <h1 className="display-4">ABOUT OUR CLUB</h1>
              <p className="fs-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                suscipit dicta deserunt, maxime fugit asperiores obcaecati
                blanditiis. Ducimus amet dolorem totam alias asperiores fugit
                tempore vel molestias placeat facilis, et at accusamus ipsam
                inventore maiores repudiandae, quia, possimus natus ex harum ut
                architecto. Sit voluptate neque maxime impedit iure assumenda
                corrupti perspiciatis necessitatibus quo illo provident ratione
                magni voluptatibus asperiores harum, natus temporibus porro
                consequatur rerum voluptas ea, eum mollitia dicta amet? Labore
                consequuntur, molestias accusamus a, facere laboriosam unde
                optio explicabo ipsa nemo libero nobis veritatis nisi dolore
                perspiciatis rem necessitatibus officiis nostrum ab molestiae,
                officia delectus corporis mollitia? Repellendus quisquam
                possimus corporis. Sunt eum autem, nam atque provident ducimus.
                Esse velit voluptatibus vel labore aliquid, suscipit odio iusto
                optio asperiores ipsam, accusamus dolores incidunt cum libero
                vitae? Nisi culpa nesciunt officiis quaerat atque velit saepe
                voluptates commodi minima harum? Quod nemo obcaecati, dolore
                dicta labore numquam necessitatibus vitae. Beatae eaque fuga
                optio ea nulla fugit, repudiandae tempora saepe cupiditate
                explicabo delectus ipsam ratione unde amet quia itaque neque
                sequi possimus molestiae facere odit. Facere id magni quae
                molestias mollitia obcaecati, reprehenderit quos aliquid quis
                explicabo maiores blanditiis rerum placeat, tempore quo sapiente
                delectus asperiores voluptatum velit? Ad, obcaecati?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutArea;
