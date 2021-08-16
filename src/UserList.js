import User from "./User.js";
import { Container, Row } from "react-bootstrap";
import React from "react";

function UserList(props) {
  let listOfUsers = props.listOfUsers.map((user) => {
    return (
      <User
        name={user.name}
        website={user.website}
        email={user.email}
        address={user.address}
      ></User>
    );
  });

  return (
    <Container>
      <Row>{listOfUsers}</Row>
    </Container>
  );
}

export default UserList;
