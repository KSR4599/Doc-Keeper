import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Button , Form, Divider, Grid, Image, Placeholder, Segment, Icon} from 'semantic-ui-react';
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
<Segment placeholder>
<div align="center">

<br/> <br/> <br/>
<Grid columns={3} divided>
<Grid.Row>
      <Grid.Column>
      <h1>Add your Aadhar Here :</h1>
    <Image src='https://cms-img.coverfox.com/aadhar-card.jpg' size='medium' circular />

    <br></br>    <br></br>       <br></br> <br></br> <br></br> <br></br> 
<form method="post" action="/upload" id="submit-form" encType="multipart/form-data">
<input type="hidden" name="name" value="aadhar" />
<input type="hidden" name="index" value="1" />
<input type="hidden" name="owner" value={this.props.account} />
<input type="file" name="doc"/>
<Button animated='fade' type="submit">
      <Button.Content hidden>Upload</Button.Content>
      <Button.Content visible>
        <Icon name='upload' />
      </Button.Content>
    </Button>
</form>
      </Grid.Column>


      <Grid.Column>
      
      <h1>Add your Pan Card Here :</h1>
    <Image src='https://5.imimg.com/data5/LJ/DH/MY-54036343/pan-card-agency-500x500.png' size='medium' circular />

    <br></br>    <br></br>    <br></br>    <br></br>   
<form method="post" action="/upload" id="submit-form" encType="multipart/form-data">
<input type="hidden" name="name" value="pan card" />
<input type="hidden" name="index" value="2" />
<input type="hidden" name="owner" value={this.props.account} />
<input type="file" name="doc"/>
<Button animated='fade' type="submit">
      <Button.Content hidden>Upload</Button.Content>
      <Button.Content visible>
        <Icon name='upload' />
      </Button.Content>
    </Button>
</form>


      </Grid.Column>


      <Grid.Column>
      <h1>Add your Passport Here :</h1>
    <Image src='https://cdn.dribbble.com/users/72473/screenshots/2537705/anim_passport.gif' size='medium' circular />

    <br></br>    <br></br>       
<form method="post" action="/upload" id="submit-form" encType="multipart/form-data">
<input type="hidden" name="name" value="passport" />
<input type="hidden" name="index" value="3" />
<input type="hidden" name="owner" value={this.props.account} />
<input type="file" name="doc"/>
<Button animated='fade' type="submit">
      <Button.Content hidden>Upload</Button.Content>
      <Button.Content visible>
        <Icon name='upload' />
      </Button.Content>
    </Button>
</form>
      </Grid.Column>

    </Grid.Row>


</Grid>
</div>
 </Segment>

</Layout>


  )
  }
}


export default StoreIndex;
