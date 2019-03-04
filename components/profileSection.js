import React from 'react';

export default ({ children, id, heading }) =>
{
  let header = null;

  if (heading)
  {
    header = (
      <h2 className="mb-5">{heading}</h2>
    );
  }

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={id}>
      <div className="w-100">
        {header}
        {children}
      </div>
    </section>
  );
};