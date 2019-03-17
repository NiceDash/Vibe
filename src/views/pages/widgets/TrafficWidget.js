import React from 'react';
import { Card, CardTitle } from 'reactstrap';

export default function TrafficWidget () {
    return (
        <Card body>
            <CardTitle className="text-uppercase text-muted h6 mb-0">Total Traffic</CardTitle>
            <div className="h2 font-weight-bold mb-0">102,212</div>
            <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                <span class="text-nowrap">Since last month</span>
            </p>
        </Card>
    )
}