import React, { Component } from 'react';
import Layout from '../components/Layout'
import { Card, Button, Icon, Image, Segment } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import { Link, Router } from '../routes';
import estore from '../ethereum/store';

class Test extends Component {

    static async getInitialProps ({ query: { name, index, imagehash} }) {

      
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        console.log("Your Account is :", account);
        return { name , index , imagehash, account}
      }
      
constructor(props) {
    super(props);
  console.log("In Contructor");

    this.state = { 
        name : this.props.name,
        index : this.props.index,
        imagehash :this.props.imagehash,
        imageLink : 'https://ipfs.io/ipfs/'+this.props.imagehash,
        message: 'If Everything is Correct. Click the confirm button!'
      }

     
    this.onClick = this.onClick.bind(this);
  
  }

      
  onClick = async (event) => {
    event.preventDefault();
    this.setState({message : 'We adding your document. Please wait.' });
      console.log("On Click Called!");
      console.log("name",this.state.name);
      console.log("imagehash", this.state.imagehash);

      var  dlink = 'https://ipfs.io/ipfs/'+this.state.imagehash;
    const accounts = await web3.eth.getAccounts();

    var docx = await estore.methods.addDocumentToStore(
       this.state.name,
       this.state.imagehash,
       this.state.index
    ).send({
      from : accounts[0]
    })
 
    estore.methods.getDoc(this.props.index).call().then(function(f){
      console.log("Doc is", f);
    })
    this.setState({message : 'Done!' });
    //Router.pushRoute('/');
  }
    

      render () 
      {
        return (
    <Layout>
    <h1>Document Name : {this.props.name}</h1>
    <h1>Your Document :<a href= {this.state.imageLink} target="_blank">Click here</a></h1>
    <h1>Your Account Address : {this.props.account}</h1>

    <form onSubmit={this.onClick}>
    <Button animated type="submit">
      <Button.Content visible>Confirm</Button.Content>
      <Button.Content hidden>
        <Icon name='angle double right' />
      </Button.Content>
    </Button>

</form>
    <Segment color='teal'>  <h2>{this.state.message}</h2></Segment>
    </Layout>
    

      )
      }
    }
    
    
    export default Test;