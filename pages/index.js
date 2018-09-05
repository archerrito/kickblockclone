import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
  //class function
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    //pass function into map, called one time for every element in array
    //also called with each element, then assigned to items
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
      <div>
        <link 
          rel="stylesheet" 
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css">
        </link>
        <h3>Open Campaigns</h3>
        {this.renderCampaigns()}
        <Button
          content="Create Campaign"
          icon="add circle"
          primary
        />
      </div>
      </Layout>
    );
  }
}

export default CampaignIndex;