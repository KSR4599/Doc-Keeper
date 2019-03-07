import React, { Component } from 'react';
import Layout from '../components/Layout'
import { Card, Button, Icon, Image, Segment, Form, Input } from 'semantic-ui-react';
import fs from 'fs';
class TestR extends Component {

 onClick(event){
   event.preventDefault()
   const file = 'C:\\Users\\ksred\\Downloads\\ZzZ\\eth-ipfs\\filekeeper\\eDoc.pdf';
   var file1 = fs.readFileSync(file);
   ipfs.add(buff, (error, result) => {
    if(error) {
      console.log("ERROR IN ADDING TO IPFS",error)
      return;
    }
     imageHash = result[0].hash;
    console.log('ipfsHash :', result[0].hash);
 }
  
 render () 
 {
   return (


 )
 }
 }
    
    
    export default TestR;