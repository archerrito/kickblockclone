import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        //get handle on campaign  instance, pass in our address instance
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        //loop through the length, get request one by one
        //best we can do for now because we can't retrieve list of structs
        const requests = await Promise.all(

            //getrequestscount expects number, 
            //requestCount is a number inside a string
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    //requests method will retrieve individual request
                    return campaign.methods.requests(index).call()
            })
        );

        return { address, requests, requestCount, approversCount };
    }

    renderRows() {
        //pass arrow function, called with every request and index
        return this.props.requests.map((request, index) => {
            //
            return <RequestRow
                key={index}
                id={index}
                request={request} 
                address={this.props.address}
                approversCount = {this.props.approversCount}
            />;
        })
    }

  render() {
      const { Header, Row, HeaderCell, Body } = Table;
    return (
      <div>
        <Layout>
            <h3>Requests</h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                    <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRows()}
                </Body>
            </Table>
            <div>Found {this.props.requestCount} requests</div>
        </Layout>
      </div>
    )
  }
}

export default RequestIndex;