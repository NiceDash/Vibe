import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import FA from 'react-fontawesome';

export default function RatingWidget () {
    return (
        <Card body>
            <CardTitle className="text-uppercase text-muted h6">Rating</CardTitle>
            <div>
                <div className="h3 font-weight-bold mb-0 inline-block">4 / 5</div>
                <div className="inline-block m-l">
                    <FA name="star" className="text-gold"/>
                    <FA name="star" className="text-gold"/>
                    <FA name="star" className="text-gold"/>
                    <FA name="star" className="text-gold"/>
                    <FA name="star-o"/>
                </div>
            </div>
        </Card>
    )
}