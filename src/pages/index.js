import React from "react";
import Timeline from '../components/Timeline';
import Helmet from 'react-helmet';

import './index.css'

const IndexPage = () => {

  return(
    <div>
      <Helmet>
        <title>Tanisharocha webite</title>
        <meta name="description" content="This is my website" />
        <meta name="keywords" content="" />
      </Helmet>
      <div className='root'>
        Tânia Rocha
        <Timeline />
      </div>
    </div>
  );
};

export default IndexPage;
