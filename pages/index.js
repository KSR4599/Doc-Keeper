import React, { Component, Fragment } from 'react';
import web3 from '../ethereum/web3';
import estore from '../ethereum/store';
import { Card, Icon, Header, Modal, Button ,Input, Form, Divider, Grid, Image, Placeholder, Segment,Container} from 'semantic-ui-react';
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
    account : account,
    modalOpen : false,
    password :''
  }


}

onChange = async(event) => {
  this.setState({password:event.target.value});
 
}
handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  onClick = async (event) => {
    event.preventDefault();
    var password = this.state.password;
    if(password =="admin"){
      Router.pushRoute('/verifydocs');
    }
  }
  render () 
  {
    return (
<Layout>

<Modal
  
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >

<Header icon='hand paper' content='Restricted Entry!' />
        <Modal.Content>
          <h3>This is a restricted entry. Please provide secret key to login.</h3>
        </Modal.Content>
        <Modal.Actions>
        <Input type="password" onChange = {this.onChange} placeholder="Enter secret key"/>
          <Button color='green' onClick={this.onClick} inverted>
            <Icon name='checkmark' /> Enter
          </Button>
        </Modal.Actions>
      </Modal>


<div align="center">


<br/> <br/> <br/>
<Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <Image src='https://cdn.dribbble.com/users/892646/screenshots/2386410/open-uri20151203-3-1m57864'  size='large' rounded/>
<br></br>
       <Link route= "/index1">
   <a className = "item"> <Button type="submit" content='User Login' icon='user' size='big' /></a>
   </Link>
  
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Grid.Column>

       <Image src='https://cdn.dribbble.com/users/1925079/screenshots/5510101/manage-2.gif'  size='large' rounded />
       <br></br>
      </Grid.Column>
   
 <Button type="submit" onClick ={this.handleOpen} content='Admin Login' icon='user secret' size='big' />
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
