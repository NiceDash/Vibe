import React from 'react';
import { Card, CardTitle } from 'reactstrap';

export default function TrafficWidget() {
  return (
    <Card body>
      <CardTitle className="text-uppercase text-muted h6 mb-0">Total Traffic</CardTitle>
      <div className="h2 font-weight-bold mb-0">102,212</div>
      <p className="mt-3 mb-0 text-muted text-sm">
        <span className="text-success mr-2">
          <i className="fa fa-arrow-up" /> 3.48%
        </span>
        <span className="text-nowrap">Since last month</span>
      </p>
    </Card>
  );
}
