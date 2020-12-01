import React from "react";
import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import StarIcon from "@material-ui/icons/Star";
import Img from "gatsby-image/withIEPolyfill";
import "react-vertical-timeline-component/style.min.css";

import withQuery from "./withQuery";
import "./index.css";

const Timeline = ({ data }) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="December 2018 to present"
        iconClassName="aurora-icon"
        icon={<Img alt="aurora" fluid={data.aurora.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">Software developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Aurora digital</h4>
        <p className="vertical-timeline-element-body">
          Frontend developer, sometimes full-stack
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2017 to December 2018"
        iconClassName="oncostats-icon"
        icon={<Img alt="oncostats" fluid={data.oncostats.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">Software developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Oncostats</h4>
        <p className="vertical-timeline-element-body">
          Oncostats software development
        </p>
        <p className="vertical-timeline-element-body">
          Product definition with the scientific team
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="October 2015 to May 2016"
        iconClassName="coupzon-icon"
        icon={<Img alt="coupzon" fluid={data.coupzon.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">
          Freelance web developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Coupzon</h4>
        <p className="vertical-timeline-element-body">
          Mobile application development (PhoneGap)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="April 2014 to May 2015"
        iconClassName="buu-icon"
        icon={<Img alt="buu" fluid={data.buu.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">
          Freelance flash developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">BUU design</h4>
        <p className="vertical-timeline-element-body">
          Corporate TV content development
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="March 2013 to April 2017"
        iconStyle={{ background: "#db001b" }}
        iconClassName="muzzley-icon"
        icon={<Img alt="muzzley" fluid={data.muzzley.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">Front-End developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Muzzley</h4>
        <p className="vertical-timeline-element-body">
          Development of mobile web interfaces to communicate with IoT devices
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2008 to February 2013"
        iconClassName="mobbit-icon"
        icon={<Img alt="mobbit" fluid={data.mobbit.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">
          Multimedia developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Mobbit Systems</h4>
        <p className="vertical-timeline-element-body">
          Development of Interactive applications, Corporate TV and Digital
          Signage contents
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2004 - 2008"
        iconClassName="ipvc-icon"
        icon={<Img alt="ipvc" fluid={data.ipvc.image.fluid} />}
      >
        <h3 className="vertical-timeline-element-title">
          Computer Graphics and Multimedia Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          ESTG – Polytechnic Institute of Viana do Castelo
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

Timeline.propTypes = {
  data: PropTypes.shape({
    mobbit: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    muzzley: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    buu: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    coupzon: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    oncostats: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    ipvc: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(Timeline);
