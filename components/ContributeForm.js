import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
//using to update routes and data on screen
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        //units of ether
        value: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        //pass address to our campaign function to return a contract instance
        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: '' });

        //get list of accounts, call contribute function
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                //specify units of wei
                value: web3.utils.toWei(this.state.value, 'ether')
            });

            //used to update page, pass in current url that we are looking at
            //refresh page we are on
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, value: ''});

    }
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
            <label>Amount to Contribute</label>
            <Input
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
                label="ether"
                labelPosition="right"
            />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage}/>
        <Button primary loading={this.state.loading}>
            Contribute!
        </Button>
      </Form>
    )
  }
}

export default ContributeForm;