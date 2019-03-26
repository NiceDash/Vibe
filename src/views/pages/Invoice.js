import React, { Component } from 'react';
import { Container, Card, CardBody } from 'reactstrap';
import AppleLogo from '../../assets/images/apple.png';
import MSLogo from '../../assets/images/microsoft.png';

export default class Invoice extends Component {
  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <div className="m-b">
              <div className="pull-left">
                <img width="50" alt="" className="invoice-logo" src={AppleLogo} />
                <address className="m-t-10">
                  Apple Enterprise Sales
                  <br />
                  (123) 411-4321.
                  <br />
                </address>
              </div>
              <div className="pull-right sm-m-t-20">
                <h2 className="font-montserrat all-caps hint-text">Invoice</h2>
              </div>
              <div className="clearfix" />
            </div>
            <div className="p-a">
              <div className="row">
                <div className="col-md-9">
                  <p className="small no-margin">Invoice to</p>
                  <h5>James May</h5>
                  <address>
                    {' '}
                    <strong>Vibe Incoperated.</strong>
                    <br />
                    vibe.inc
                    <br />
                    1600 Amphitheatre Pkwy, Mountain View,
                    <br />
                    CA 94043, United States
                  </address>
                </div>
                <div className="col-md-3">
                  <br />
                  <div>
                    <div className="pull-left bold all-caps">Invoice No :</div>
                    <div className="pull-right">0023</div>
                    <div className="clearfix" />
                  </div>
                  <div>
                    <div className="pull-left font-montserrat bold all-caps">Invoice date :</div>
                    <div className="pull-right">02/09/19</div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive m-b">
              <table className="table m-t-50">
                <thead>
                  <tr>
                    <th className="">Task Description</th>
                    <th className="text-center">Rate</th>
                    <th className="text-center">Hours</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <p className="text-black">Character Illustration</p>
                      <p className="small">
                        Character Design projects from the latest top online portfolios on Behance.
                      </p>
                    </td>
                    <td className="text-center">$65.00</td>
                    <td className="text-center">84</td>
                    <td className="text-right">$5,376.00</td>
                  </tr>
                  <tr>
                    <td className="">
                      <p className="text-black">Cross Heart Charity Branding</p>
                      <p className="small">
                        Attempt to attach higher credibility to a new product by associating it with a well established
                        company name
                      </p>
                    </td>
                    <td className="text-center">$89.00</td>
                    <td className="text-center">100</td>
                    <td className="text-right">$8,900.00</td>
                  </tr>
                  <tr>
                    <td className="">
                      <p className="text-black">iOs App</p>
                      <p className="small">
                        A video game franchise Inspired primarily by a sketch of stylized wingless - Including Branding
                        / Graphics / Motion Picture &amp; Videos
                      </p>
                    </td>
                    <td className="text-center">$100.00</td>
                    <td className="text-center">500</td>
                    <td className="text-right">$50,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="m-b">
              <img width="150" alt="" className="invoice-signature" src={MSLogo} />
              <p>Designer’s Identity</p>
            </div>
            <div className="p-a b-t b-b m-b-lg">
              <div className="row">
                <div className="col-sm-2 clearfix">
                  <h5 className="font-montserrat all-caps small no-margin hint-text bold">Advance</h5>
                  <h3 className="no-margin">$21,000.00</h3>
                </div>
                <div className="col-sm-5 clearfix">
                  <h5 className="font-montserrat all-caps small no-margin hint-text bold">Discount (10%)</h5>
                  <h3 className="no-margin">$645.00</h3>
                </div>
                <div className="col-sm-5 text-right">
                  <h5 className="all-caps small no-margin hint-text bold">Total</h5>
                  <h1 className="m-a-none">$64,276.00</h1>
                </div>
              </div>
            </div>
            <p className="small hint-text">
              Services will be invoiced in accordance with the Service Description. You must pay all undisputed invoices
              in full within 30 days of the invoice date, unless otherwise specified under the Special Terms and
              Conditions. All payments must reference the invoice number. Unless otherwise specified, all invoices shall
              be paid in the currency of the invoice
            </p>
            <p className="small hint-text">
              Insight retains the right to decline to extend credit and to require that the applicable purchase price be
              paid prior to performance of Services based on changes in insight's credit policies or your financial
              condition and/or payment record. Insight reserves the right to charge interest of 1.5% per month or the
              maximum allowable by applicable law, whichever is less, for any undisputed past due invoices. You are
              responsible for all costs of collection, including reasonable attorneys' fees, for any payment default on
              undisputed invoices. In addition, Insight may terminate all further work if payment is not received in a
              timely manner.
            </p>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
