import React,  { useState } from "react"
import { Card } from "react-bootstrap";

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const getIndex = (index) => {
      setTabIndex(index)
  }
  return (
    <div className="home flex-2">
      <Card className="home__tabs shadow-sm">
        <div className="row">
          <div
            className={`feeds col ${tabIndex === 0 ? "active" : ""}`}
            onClick={() => getIndex(0)}
          >
            <p className=" text-muted m-0 text-center py-2">FEEDS</p>
          </div>
          <div
            className={`people col ${tabIndex === 1 ? "active" : ""}`}
            onClick={() => getIndex(1)}
          >
            <p className=" text-muted m-0 text-center py-2">PEOPLE</p>
          </div>
          <div
            className={`trending col ${tabIndex === 2 ? "active" : ""}`}
            onClick={() => getIndex(2)}
          >
            <p className=" text-muted m-0 text-center py-2">TRENDING</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
