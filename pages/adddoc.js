import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import estore from '../ethereum/store';
import web3 from '../ethereum/web3';


class AddDoc extends Component {


    static async getInitialProps(){
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        console.log("ACCOUNT :", account);
        return { account };
      }
      

      render () 
      {
        return (
    <Layout>


    <div align="center">
    <br></br>
   
    <h1>Add your Aadhar Here :</h1>
    <Image src='https://cms-img.coverfox.com/aadhar-card.jpg' size='medium' circular />

    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>
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
</div>
    </Layout>
    
    
      )
      }
    }
    
    
    export default AddDoc;