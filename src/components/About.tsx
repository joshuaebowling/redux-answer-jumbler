/// <reference path="../index.d.ts" />
import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div>
    <h1>Question Answer Jumbler - WORK IN PROGRESS</h1>
    <p>
      <Link to="/try">try it now! (demo)</Link>
      <br />
      <strong>or</strong>
      <br />
      <Link to="/edit/id/0">Create</Link> a Question-Answer set (QA Set)
    </p>
    <h3>Coming Soon...</h3>
    <ol>
      <li>backup/export lists IN PROGRESS</li>
    </ol>
  </div>
);

export default About;
