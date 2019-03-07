import React, { Component } from 'react';
import Layout from '../components/Layout'
import { Grid, Button, Icon} from 'semantic-ui-react';


class Test extends Component {

  

  static async getInitialProps ({ query: { ipfs, ids} }) {

    return { ipfs , ids}

  }

      render () 
{
    return(
    <Layout>                                                
    
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
            
<br/><br/><br/><br/><br/><br/>
             <form method="post" action='/verifyit'>
             <input type ="text" name="id" placeholder="Enter the id of document"/>
    <Button animated type="submit">
      <Button.Content visible>Verify</Button.Content>
      <Button.Content hidden>
        <Icon name='angle double right' />
      </Button.Content>
    </Button>

</form>
    </Layout>
    
    
      )
      }
    }
    
    
    export default Test;