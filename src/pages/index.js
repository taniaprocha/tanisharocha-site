import React from "react";
import Timeline from "../components/Timeline";
import Helmet from "react-helmet";

import "./index.css";

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Tanisharocha webite</title>
        <meta name="description" content="This is my website" />
        <meta name="keywords" content="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="root">
        Tânia Rocha
        <Timeline />
      </div>
    </div>
  );
};

export default IndexPage;
