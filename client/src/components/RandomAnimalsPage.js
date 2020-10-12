import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const RandomAnimalsPage = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/petfinder/");

        setData(response.data);
        setIsLoaded(true);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Size</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            data.animals.map((animal) => (
              <tr>
                <td>{animal.name}</td>
                <td>{animal.type}</td>
                <td>{animal.breeds.primary}</td>
                <td>{animal.gender}</td>
                <td>{animal.size}</td>
                <td>{animal.age}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RandomAnimalsPage;
