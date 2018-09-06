import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign'

class CampaignShow extends Component {
  //called with separate props object than the one that
  //ends up in component instance
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    //process object, label fields to pass down in props
    return{
      minimumContribution: summary[0],
      balance: summary[1],
      requestcount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    //destructuring to pull of properties
    const {
      balance,
      manager, 
      minimumContribution, 
      requestscount, 
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:'The manager created this campaign and create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items= {items} />;
  }
  render() {
    return (
        <Layout>
            <h3>Campaign Show</h3>
            {this.renderCards()}
        </Layout>
    )
  }
}

export default CampaignShow;