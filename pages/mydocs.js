import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Grid, Button, Icon} from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class Test extends Component {
  static async getInitialProps ({ query: { names, ipfs, status} }) {

      
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("Your Account is :", account);
    return { names , ipfs , status, account}
  }


      
  constructor(props) {
    super(props);
  console.log("In Contructor");

    this.state = { 
        names : this.props.names,
        ipfs : this.props.ipfs,
        status :this.props.status
      }

     
    
  
  }


      render () 
      {
        return (
          <Layout>                                                
    
          <Grid>
          <ol>
      
                 <h2>Names : </h2>    <h2>
                 {this.props.names.map(function(name, index){
                  return <li key={ index }>{name}</li>;
                            })} </h2>
      </ol>
                           
      <ul>
                      <h2>Documents:</h2>  
                      <h2>{this.props.ipfs.map(function(name, index){
                        return <li> <a href ={'https://ipfs.io/ipfs/'+name} target="_blank"> Click here</a> </li>;
                        })}</h2>
     </ul>   

      <ul>
                      <h2>Verification Status :</h2>  
                      <h2>{this.props.status.map(function(name, index){
                         return <li key={ index }>{name}</li>;
                        })}</h2>
      </ul>  
                   
      </Grid>
    </Layout>              
    
    
      )
      }
    }
    
    
    export default Test;