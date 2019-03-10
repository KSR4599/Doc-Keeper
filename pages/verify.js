import React, { Component } from 'react';
import Layout from '../components/Layout'
import { Grid, Button, Icon, Image, Segment, Divider} from 'semantic-ui-react';
import estore from '../ethereum/store';
import web3 from '../ethereum/web3';

class Test extends Component {

  

  static async getInitialProps ({ query: { ipfs, ids} }) {

    return { ipfs , ids}

  }

   constructor(props) {
    super(props);
  console.log("In Contructor");


    this.state = { 
        id : '',
        message: 'If Everything is Correct. Click the confirm button!'
      }

     
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  
  }

  onChange = async(event) => {
    this.setState({id:event.target.value});
   
  }

  onClick = async (event) => {
    event.preventDefault();
const accounts = await web3.eth.getAccounts();
const account = accounts[0];
var docx = await estore.methods.verifyDoc(
  this.state.id
).send({
 from : account
})
console.log("Document verified Succesfully! :", docx)
  }

      render () 
{
    return(
    <Layout>                                                

   <div align="center">


    <Segment.Inline>
    <h1>Document Verification Page :</h1>   
    
    <Image src='https://cdn.dribbble.com/users/760295/screenshots/3866906/scaning.gif' size='medium' circular />
    </Segment.Inline>



    <Segment placeholder>
    <Segment.Inline>
  <Grid>
    <ol>

           <h2>Documents : </h2>    <h3>
           {this.props.ipfs.map(function(name){
                        return <li> <a href ={'https://ipfs.io/ipfs/'+name} target="_blank"> Click here</a> </li>;
                      })} </h3>
</ol>
                     
<ul>
                <h2>ID :</h2>  <h3>{this.props.ids.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}</h3>
              </ul>   
            
              </Grid>

              <br></br>    <br></br>   <br></br>    <br></br>  

             <form onSubmit={this.onClick}>
             <input type ="text"  onChange = {this.onChange} placeholder="Enter the id of document"/>
             <br></br> <br></br> 
    <Button animated type="submit">
      <Button.Content visible>Verify</Button.Content>
      <Button.Content hidden>
        <Icon name='check' />
      </Button.Content>
    </Button>

</form>
    </Segment.Inline>
    </Segment>
    </div>
    </Layout>
    
    
      )
      }
    }
    
    
    export default Test;