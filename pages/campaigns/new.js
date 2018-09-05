import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {

    state = {
        //piece of state that will record input value
        minimumContribution: '',
        errorMessage: ''
    }

    //don't have to do complicated binding
    onSubmit= async (event) => {
        //prevents browser from calling function body
        event.preventDefault();

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    //metamask will handle gas
                    from: accounts[0]
                });
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

    };

    render() {
        return (
            <Layout>
            <h3>Create a Campaign!</h3>
            
            <Form 
                onSubmit={this.onSubmit} 
                //error empty, presumed falsy, won't appear
                //!! turns double opposite value to handle console 
                //string requirement error message
                error={!!this.state.errorMessage}>
                <Form.Field>
                <label>Minimum Contribution</label>
                <Input 
                    label="wei" 
                    labelPosition="right"
                    value={this.state.minimumContribution}
                    //typing triggers function, reset state value
                    //event object contains new value
                    onChange={event => 
                        this.setState({ minimumContribution: event.target.value })}/>
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary>Create!</Button>
            </Form>
            </Layout>
        );
    }
}

export default CampaignNew;