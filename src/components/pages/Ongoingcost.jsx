import React from 'react';
import './Ongoingcost.css';

function Ongoingcost() {
  return (
    <div className='recurrent_cost'>
        <h1>Ongoing Cost Estimates</h1>
        <p>The ongoing costs are dependent on the service providers.
            They may vary depending on the host service provided. Usually, this is paid and set
            by the client, but we can help you set up.
        </p>

        <table className='cost_table'>
            <tr>
                <th>Items</th>
                <th>Renewal</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Domain Name Service</td>
                <td>per year</td>
                <td>@ $10 - $25</td>
            </tr>
            <tr>
                <td>Website & Email Hosting Services (20GB-50GB)</td>
                <td>per year</td>
                <td>@ 50 - $250</td>
            </tr>
            <tr>
                <td>Secure Security SSL/ TLS Prices (https)</td>
                <td>per year</td>
                <td>@ $20 - $210</td>
            </tr>
        </table>
    </div>
  )
}

export default Ongoingcost;