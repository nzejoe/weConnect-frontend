import React,  { useState } from "react"
import { Card, Col, Row } from "react-bootstrap";

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const getIndex = (index) => {
      setTabIndex(index)
  }
  return (
    <div className="home py-4">
      <Card className="home__tabs shadow-sm w-100">
        <Row>
          <Col
            className={`feeds ${tabIndex === 0 ? "active" : ""}`}
            onClick={() => getIndex(0)}
          >
            <p className=" text-muted m-0 text-center py-2">FEEDS</p>
          </Col>
          <Col
            className={`people ${tabIndex === 1 ? "active" : ""}`}
            onClick={() => getIndex(1)}
          >
            <p className=" text-muted m-0 text-center py-2">PEOPLE</p>
          </Col>
          <Col
            className={`trending ${tabIndex === 2 ? "active" : ""}`}
            onClick={() => getIndex(2)}
          >
            <p className=" text-muted m-0 text-center py-2">TRENDING</p>
          </Col>
        </Row>
      </Card>
      <div className="blog-post">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente, quia maiores asperiores officia tenetur deleniti atque, cupiditate voluptas aperiam ad dicta ex provident velit sed rerum blanditiis pariatur iusto, esse aut voluptatum. Sunt, vitae veniam iure explicabo sed earum sequi et suscipit temporibus velit quod quis odit dignissimos fuga repellendus ad omnis quos porro consectetur esse obcaecati facilis ab! Suscipit nam nemo sequi, ducimus nulla necessitatibus architecto sunt, harum dolorum voluptas assumenda eos porro aliquam ea magnam illo aliquid quas iste error vel autem? Omnis accusantium, quisquam perspiciatis cum dolores provident similique aliquam iure fuga pariatur maiores ipsa et voluptates laudantium cupiditate praesentium nostrum eaque voluptas. Incidunt quaerat voluptatibus molestiae corrupti quasi atque facilis asperiores corporis eos dolore quos quia odio, inventore dignissimos repudiandae blanditiis vel consequatur. Quia id eius suscipit qui accusantium repudiandae nobis repellendus dolore ut, inventore corporis incidunt laborum. Deserunt, neque? Voluptatem corrupti tempora consequatur aliquam ea voluptates maxime recusandae doloribus modi suscipit distinctio possimus nobis quae, vero maiores itaque! Commodi facere esse et molestias debitis temporibus, quod expedita? Et adipisci harum consequatur est sed dolore, repellat ab ipsum necessitatibus rem, modi reprehenderit consequuntur saepe eius officiis numquam, magni vero odit asperiores expedita! Delectus ad harum numquam, doloribus dolorum, soluta vel optio eum cum omnis voluptatibus saepe quas error quasi modi dolores fugiat et facere illum repellat consectetur dignissimos dolor! Quos veritatis iste alias eligendi molestias quo neque a dignissimos saepe quas at aperiam, corrupti dolores placeat voluptates veniam animi iusto obcaecati explicabo, cupiditate repellendus! Ut, illo ullam. Numquam sed, animi molestias culpa fuga nulla fugiat architecto soluta? Magnam necessitatibus eligendi voluptates eveniet omnis est ipsa nostrum ut provident, perferendis soluta dicta error praesentium vero cupiditate a dolorem cumque eum dolore molestiae rem. Fugit, veritatis! Eos ipsum quibusdam nam iste corrupti aliquid assumenda at labore architecto esse odio laboriosam, dolores facere reiciendis culpa! Minima assumenda velit, dignissimos, corrupti molestiae quaerat explicabo ratione totam vel officiis delectus optio ea eum repellendus saepe consequuntur placeat accusamus ducimus distinctio suscipit non? Quis numquam minus qui sed natus est quae quaerat maxime ipsa minima cum itaque culpa fugit, quia aliquam voluptates perferendis fugiat beatae libero recusandae! Incidunt vero, similique ad iste quos nesciunt provident quaerat, placeat eos accusantium alias, rerum voluptatum dolore sequi distinctio at cumque quod architecto odit consequuntur eligendi minima! Recusandae alias, vel exercitationem, accusantium tenetur aspernatur pariatur omnis fuga odio nihil voluptates veritatis quam praesentium asperiores deleniti a. Dignissimos, commodi. Vel, sit fugit sint architecto, atque dolorum, minima excepturi voluptate sunt maxime totam aliquid optio laborum animi? Ullam nulla consectetur non iure dignissimos. Cumque magni neque minima nulla corporis corrupti voluptate, iusto porro perferendis, ex voluptatibus quasi dicta voluptates dolorem culpa, natus temporibus! Exercitationem, id ipsa et veritatis neque repudiandae eaque molestiae nisi incidunt deserunt a debitis alias ullam nostrum tempora accusamus saepe nihil! Praesentium consequatur animi ipsam esse. Temporibus maiores, sint adipisci vero mollitia consequuntur praesentium aut distinctio veniam fugiat a iste similique quibusdam reprehenderit molestias porro ex accusamus doloribus fuga recusandae dolor neque libero. Earum.
      </div>
    </div>
  );
};

export default HomePage;
