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
            <div class="m-b">
              <div class="pull-left">
                <img width="50" alt="" class="invoice-logo" src={AppleLogo} />
                <address class="m-t-10">
                  Apple Enterprise Sales
                  <br />
                  (123) 411-4321.
                  <br />
                </address>
              </div>
              <div class="pull-right sm-m-t-20">
                <h2 class="font-montserrat all-caps hint-text">Invoice</h2>
              </div>
              <div class="clearfix" />
            </div>
            <div class="p-a">
              <div class="row">
                <div class="col-md-9">
                  <p class="small no-margin">Invoice to</p>
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
                <div class="col-md-3">
                  <br />
                  <div>
                    <div class="pull-left bold all-caps">Invoice No :</div>
                    <div class="pull-right">0023</div>
                    <div class="clearfix" />
                  </div>
                  <div>
                    <div class="pull-left font-montserrat bold all-caps">Invoice date :</div>
                    <div class="pull-right">02/09/19</div>
                    <div class="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive m-b">
              <table class="table m-t-50">
                <thead>
                  <tr>
                    <th class="">Task Description</th>
                    <th class="text-center">Rate</th>
                    <th class="text-center">Hours</th>
                    <th class="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="">
                      <p class="text-black">Character Illustration</p>
                      <p class="small">Character Design projects from the latest top online portfolios on Behance.</p>
                    </td>
                    <td class="text-center">$65.00</td>
                    <td class="text-center">84</td>
                    <td class="text-right">$5,376.00</td>
                  </tr>
                  <tr>
                    <td class="">
                      <p class="text-black">Cross Heart Charity Branding</p>
                      <p class="small">
                        Attempt to attach higher credibility to a new product by associating it with a well established
                        company name
                      </p>
                    </td>
                    <td class="text-center">$89.00</td>
                    <td class="text-center">100</td>
                    <td class="text-right">$8,900.00</td>
                  </tr>
                  <tr>
                    <td class="">
                      <p class="text-black">iOs App</p>
                      <p class="small">
                        A video game franchise Inspired primarily by a sketch of stylized wingless - Including Branding
                        / Graphics / Motion Picture &amp; Videos
                      </p>
                    </td>
                    <td class="text-center">$100.00</td>
                    <td class="text-center">500</td>
                    <td class="text-right">$50,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="m-b">
              <img width="150" alt="" class="invoice-signature" src={MSLogo} />
              <p>Designer’s Identity</p>
            </div>
            <div class="p-a b-t b-b m-b-lg">
              <div class="row">
                <div class="col-sm-2 clearfix">
                  <h5 class="font-montserrat all-caps small no-margin hint-text bold">Advance</h5>
                  <h3 class="no-margin">$21,000.00</h3>
                </div>
                <div class="col-sm-5 clearfix">
                  <h5 class="font-montserrat all-caps small no-margin hint-text bold">Discount (10%)</h5>
                  <h3 class="no-margin">$645.00</h3>
                </div>
                <div class="col-sm-5 text-right">
                  <h5 class="all-caps small no-margin hint-text bold">Total</h5>
                  <h1 class="m-a-none">$64,276.00</h1>
                </div>
              </div>
            </div>
            <p class="small hint-text">
              Services will be invoiced in accordance with the Service Description. You must pay all undisputed invoices
              in full within 30 days of the invoice date, unless otherwise specified under the Special Terms and
              Conditions. All payments must reference the invoice number. Unless otherwise specified, all invoices shall
              be paid in the currency of the invoice
            </p>
            <p class="small hint-text">
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
