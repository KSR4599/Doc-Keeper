import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/Layout'
import store from '../ethereum/store';

class Uploaded extends Component {

    static async getInitialProps(){
       var docs =  await store.methods.getDoc(1).call();
       console.log("Documents Found :", docs[0]);
        return { docs };
      }

      render () 
      {
        return (
         
    <Layout>
       <h1>All the Documents you have uploaded :</h1>
    <h1>{this.props.docs.id}</h1>
    </Layout>
    
    
      )
      }
    }
    
    
    export default Uploaded;