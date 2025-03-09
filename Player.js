import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Player.css";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <motion.div
      className="player-card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Card>
        <Card.Img variant="top" src={image} className="player-img" />
        <Card.Body className="card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Team: {team}</Card.Text>
          <Card.Text>Nationality: {nationality}</Card.Text>
          <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
          <Card.Text>Age: {age}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Player;
