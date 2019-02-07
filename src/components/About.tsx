/// <reference path="../index.d.ts" />
import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div>
    <h1>Question Answer Jumbler - WORK IN PROGRESS</h1>
    <p>
      <Link to="/try">try it now!</Link>
    </p>
    <h3>Coming Soon...</h3>
    <ol>
      <li>Add/Edit question/answer lists (IN PROGRESS)</li>
      <li>Scoring Information</li>
      <li>backup/export lists</li>
    </ol>
  </div>
);

export default About;
