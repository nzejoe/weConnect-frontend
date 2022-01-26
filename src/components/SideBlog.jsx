import React from "react";
import { InputGroup, Card, FormControl } from "react-bootstrap";
import { MdSearch, MdOutlineOpenInNew, MdMoreVert } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const SideBlog = () => {
  return (
    <aside className="aside-right">
      <div className="search-form d-none d-md-block">
        <Card>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <MdSearch className="icon text-primary" />
            </InputGroup.Text>
            <FormControl placeholder="Search weConnect" />
          </InputGroup>
        </Card>
      </div>
      <div className="trending mt-4">
        <Card>
          <Card.Header className="bg-white">What's happening</Card.Header>
          <Card.Body className="d-flex justify-content-between">
            <div className="card-inner">
              <div className="text-small">
                <small>Celebrity</small> <BsDot />
                <small>Live</small>
              </div>
              <h6>Happy Birthday, Chris</h6>
              <p className="text-small">Trending with</p>
              <h6 className="text-primary">#HappyBirthday</h6>
            </div>
            <div className="img-wrapper">
              <Card.Img src="img/profile/profile-1.jpg"></Card.Img>
            </div>
          </Card.Body>
          <hr />
          <Card.Body>
            <div className="card-inner">
              <h6>#JumiaMarket</h6>
              <p className="text-small">Buy now with exclusive offer</p>
              <p className="text-small">
                <MdOutlineOpenInNew />
                Promoted By Jumia World
              </p>
            </div>
          </Card.Body>
          <hr />
          <Card.Body className="d-flex justify-content-between">
            <div className="card-inner">
              <p className="text-small">Trending in Nigeria</p>
              <h6>#JumiaMarket</h6>
              <p className="text-small">Buy now with exclusive offer</p>
              <p className="text-small">34.2k Tweets</p>
            </div>
            <div className="card-action">
              <MdMoreVert className="option-icon p-1" />
            </div>
          </Card.Body>
          <hr />
          <Card.Body className="d-flex justify-content-between">
            <div className="card-inner">
              <p className="text-small">Trending in Nigeria</p>
              <h6>News</h6>
              <p className="text-small">18.3k Tweets</p>
            </div>
            <div className="card-action">
              <MdMoreVert className="option-icon p-1" />
            </div>
          </Card.Body>
          <hr />
          <Card.Body className="d-flex justify-content-between">
            <div className="card-inner">
              <div className="text-small">
                <small>Design</small> <BsDot />
                <small>Live</small>
              </div>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, mollitia!</h6>
            </div>
            <div className="img-wrapper design">
              <Card.Img src="img/other/design.jpg"></Card.Img>
            </div>
          </Card.Body>
          <hr />
          <Card.Body>
            <button className="btn text-primary">Show More</button>
          </Card.Body>
        </Card>
      </div>
    </aside>
  );
};

export default SideBlog;
