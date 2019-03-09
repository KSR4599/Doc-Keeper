import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Button , Form, Divider, Grid, Image, Placeholder, Segment} from 'semantic-ui-react';
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

  this.state = { 
    buffer : null,
    ipfsHash : '',
    message :'',
    account : this.props.account
  }



}
 componentDidMount() {
  window.addEventListener('load',async () => {
   const accounts = await web3.eth.getAccounts();
   const account = accounts[0];
   console.log("Account :",account)
   this.setState({account : account });
  });
}



  render () 
  {

    return (
<Layout>
<div align="center">
<h1>Your Account:{this.state.account} </h1>

<br/> <br/> <br/>
<Segment placeholder>
<Grid columns={3} divided>
<Grid.Row>
      <Grid.Column>
       <img src='https://cdn.dribbble.com/users/789033/screenshots/2346688/finalloader1-2.gif' />
       <form action="/adddoc" method="get">
       <br></br>  <br></br> 
     <Button type="submit" content='Add Document' icon='signup' size='big' /> 
  
       </form>
      </Grid.Column>

 
      <Grid.Column>
       <img src='https://i.gifer.com/QZJI.gif' />
       <form action="/mydocs" method="post">
       <input type="hidden" name ="account" value={this.state.account} />
       <input type="hidden" name ="sample" value="10"/>
       <br></br>  <br></br> 
        <Button content='My Documents' icon='signup' size='big' />
        </form>
      </Grid.Column>

 


      

      <Grid.Column>
       <img src='https://cdn.dribbble.com/users/391380/screenshots/5431062/icon.gif' />
       <form action="/mydocs" method="post">
       <input type="hidden" name ="account" value={this.state.account} />
       <input type="hidden" name ="sample" value="10"/>
       <br></br>
       <input type="text" name="address" placeholder="Enter the address"/>
       <br></br>  <br></br> 
        <Button content='Check the status' icon='signup' size='big' />
        </form>
      </Grid.Column>

</Grid.Row>
    </Grid>

  </Segment>


</div>


</Layout>


  )
  }
}


export default StoreIndex;
