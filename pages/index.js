import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Button , Form, Divider, Grid, Image, Placeholder, Segment,Container} from 'semantic-ui-react';
import Layout from '../components/Layout'
import ipfs from '../ipfs';
import axios, { post } from 'axios';
import { Router, Link } from '../routes';


import ipfsClient from 'ipfs-http-client';





class StoreIndex extends Component {

  static async getInitialProps () {

      
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    return {account}
  }
 

constructor(props) {
  super(props);
  const accounts = web3.eth.getAccounts();
  const account = this.props.account;

  this.state = { 
    buffer : null,
    ipfsHash : '',
    message :'',
    account : account
  }


}


  render () 
  {
    return (
<Layout>
<div align="center">


<br/> <br/> <br/>
<Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
       <img src='http://menloworks.com/wp-content/uploads/mobile-user-segments.png' />
<br/><br/><br/><br/><br/><br/>
       <Link route= "/index1">
   <a className = "item"> <Button type="submit" content='User' icon='signup' size='big' /></a>
   </Link>
  
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Grid.Column>
       <img src='https://www.speexx.com/wp-content/uploads/icon-think-user-centric-1.png' />

   
      </Grid.Column>
      <Link route= "/verifydocs">
   <a className = "item"> <Button type="submit" content='Admin' icon='signup' size='big' /></a>
   </Link>
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
