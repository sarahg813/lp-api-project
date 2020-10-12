import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Container,
} from "reactstrap";

const FilterPage = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/petfinder/filter/" + selectedType);

      setData(response.data);
      setIsLoaded(true);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleOnChange = (event) => {
    const { value } = event.target;

    setSelectedType(value);
  };

  const handleButton = () => {
    setSelectedType("Filter by Animal");
    fetchData();
  };

  return (
    <div className="filter-root">
      <Container style={{ marginBottom: "20px" }}>
        <Form>
          <FormGroup>
            <Input
              type="select"
              name="filter"
              id="animalsFilter"
              value={selectedType}
              onChange={handleOnChange}
            >
              <option>Filter By Animal</option>
              <option>dog</option>
              <option>cat</option>
              <option>rabbit</option>
              <option>horse</option>
              <option>bird</option>
            </Input>
          </FormGroup>
        </Form>
        <Button onClick={handleButton}>Filter</Button>
      </Container>
      <Container>
        <Row>
          {isLoaded &&
            data.animals.map((animal) => (
              <Col sm="6">
                <Card style={{ marginBottom: "10px" }}>
                  <CardImg
                    top
                    width="100%"
                    src={
                      animal.photos.length > 0
                        ? animal["photos"][0]["medium"]
                        : "https://via.placeholder.com/300"
                    }
                    alt="Card image"
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>{animal.name}</strong>
                    </CardTitle>
                    <CardText>Breed: {animal.breeds.primary}</CardText>
                    <CardText>Age: {animal.age}</CardText>
                    <CardText>Gender: {animal.gender}</CardText>
                    <CardText>Description: {animal.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default FilterPage;
