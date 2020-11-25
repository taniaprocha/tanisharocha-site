import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

import 'react-vertical-timeline-component/style.min.css';
import "./index.css";

const Timeline = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="December 2018 to present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Aurora digital</h4>
          <p>
          Frontend developer, sometimes full-stack
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2017 to December 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Oncostats</h4>
          <p>
          Oncostats software development

          </p>
          <p>
  Product definition with the scientific team

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2015 to May 2016"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Freelance web developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Coupzon</h4>
          <p>
          Mobile application development (PhoneGap)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2014 to May 2015"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Freelance flash developer</h3>
          <h4 className="vertical-timeline-element-subtitle">BUU design</h4>
          <p>
          Corporate TV content development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2013 to April 2017"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Front-End developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Muzzley</h4>
          <p>
          Development of mobile web interfaces to communicate with IoT devices
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2008 to February 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Multimedia developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mobbit Systems</h4>
          <p>
          Development of Interactive applications, Corporate TV and Digital Signage contents
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2008"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Computer Graphics and Multimedia Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">ESTG – Polytechnic Institute of Viana do Castelo</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    );
}

export default Timeline;
