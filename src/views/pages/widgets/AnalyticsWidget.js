import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, UncontrolledTooltip } from 'reactstrap';

import FA from 'react-fontawesome';

export default function AnalyticsWidget() {
  const chartColors = {
    red: 'rgb(233, 30, 99)',
    danger: 'rgb(233, 30, 99)',
    dangerTransparent: 'rgba(233, 30, 99, .8)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 180, 0)',
    green: 'rgb(34, 182, 110)',
    blue: 'rgb(68, 159, 238)',
    primary: 'rgb(68, 159, 238)',
    primaryTransparent: 'rgba(68, 159, 238, .8)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',

    primaryShade1: 'rgb(68, 159, 238)',
    primaryShade2: 'rgb(23, 139, 234)',
    primaryShade3: 'rgb(14, 117, 202)',
    primaryShade4: 'rgb(9, 85, 148)',
    primaryShade5: 'rgb(12, 70, 117)',
  };
  const line = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: '# of Votes',
          data: [6, 2, 7, 3, 8, 2, 6],
          borderColor: 'transparent',
          backgroundColor: chartColors.primary,
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          borderWidth: 4,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      animation: false,
    },
  };
  return (
    <Card>
      <CardBody>
        <div className="display-flex">
          <div className="text-muted">Conversions</div>
          <span style={{ marginLeft: 'auto' }} id="AnalyticsWidgetTooltip">
            <FA name="question-circle-o" />
          </span>
          <UncontrolledTooltip placement="top" target="AnalyticsWidgetTooltip">
            Monthly Conversions
          </UncontrolledTooltip>
        </div>
        <h3 className="mb-1 h2">678</h3>
        <div className="full-bleed m-t">
          <Line data={line.data} width={12} height={2} legend={{ display: false }} options={line.options} />
        </div>
      </CardBody>
    </Card>
  );
}
