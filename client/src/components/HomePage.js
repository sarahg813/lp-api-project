import React from "react";
import { Container } from "reactstrap";

const HomePage = () => {
  return (
    <div className="home-root">
      <Container className="home-container">
        <div>
          <p>
            This was made with the Petfinder API:{" "}
            <a href="https://www.petfinder.com/developers/v2/docs/">
              https://www.petfinder.com/developers/v2/docs/
            </a>
          </p>

          <h5>List of Random Animals</h5>
          <p>
            When you click on the nav item, it'll hit the GET endpoint
            "https://api.petfinder.com/v2/animals" and return a list of 20
            random animals that are up for adoption.{" "}
          </p>

          <h5>Filter</h5>
          <p>
            When you click on the nav item, it'll hit the GET endpoint
            "https://api.petfinder.com/v2/animals?type=&#123;type&#125;" and
            return a list of 20 animals of the selected type.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
