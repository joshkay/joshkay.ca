import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';

class ProfileSection extends Component
{
  constructor(props)
  {
    super(props);

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this);
  }

  getSectionInfo()
  {
    return {
      number: this.props.number,
      id: this.props.id
    };
  }

  handleWaypointEnter()
  {
    this.props.handleSectionEnter(this.getSectionInfo());
  }

  handleWaypointLeave()
  {
    this.props.handleSectionLeave(this.getSectionInfo());
  }

  render()
  {
    const { children, id, heading } = this.props

    let header = null;

    if (heading)
    {
      header = (
        <h2 className="mb-5">{heading}</h2>
      );
    }

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={id}>
          <div className="w-100">
            {header}
            {children}
          </div>
        </section>
      </Waypoint>
    );
  }
};

export default ProfileSection;