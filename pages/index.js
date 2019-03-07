import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Button , Form, Divider, Grid, Image, Placeholder, Segment} from 'semantic-ui-react';
import Layout from '../components/Layout'
import ipfs from '../ipfs';
import axios, { post } from 'axios';
import { Router } from '../routes';

import ipfsClient from 'ipfs-http-client';





class StoreIndex extends Component {

  static async getInitialProps () {

      
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("The accout is", account)
    return {account}
  }

constructor(props) {
  super(props);


  this.state = { 
    buffer : null,
    ipfsHash : '',
    message :'',
    account :this.props.account
  }


}


  render () 
  {
    return (
<Layout>
<div align="center">
<h1>Your Account:{this.props.account} </h1>

<br/> <br/> <br/>
<Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
       <img src='https://cdn.dribbble.com/users/789033/screenshots/2346688/finalloader1-2.gif' />
       <form action="/adddoc" method="get">
       <Button type="submit" content='Add Document' icon='signup' size='big' />
       </form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Grid.Column>
       <img src='https://i.gifer.com/QZJI.gif' />
       <form action="/mydocs" method="get">
       <input type="hidden" name ="account" value="{this.props.account}" />
        <Button content='Show Document' icon='signup' size='big' />
        </form>
      </Grid.Column>

      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>


</div>


</Layout>


  )
  }
}


export default StoreIndex;
