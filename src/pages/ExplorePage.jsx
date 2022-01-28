import React from 'react';
import { Card } from 'react-bootstrap';
import { MdOutlineOpenInNew, MdMoreVert } from "react-icons/md";
import { BsDot } from 'react-icons/bs';

import { PageHeader } from '../components';

const ExplorePage = () => {
  return (
    <div className="explore-page trending mt-4">
        <PageHeader pageTitle={'Explore'}/>
      <Card>
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
            <Card.Img src="/img/profile/profile-1.jpg" ></Card.Img>
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
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, mollitia!
            </h6>
          </div>
          <div className="img-wrapper design">
            <Card.Img src="/img/other/design.jpg"></Card.Img>
          </div>
        </Card.Body>
        <hr />

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
            <Card.Img src="/img/profile/profile-4.jpg" ></Card.Img>
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
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, mollitia!
            </h6>
          </div>
          <div className="img-wrapper design">
            <Card.Img src="/img/other/design.jpg"></Card.Img>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


export default ExplorePage;