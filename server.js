const { createServer } = require('http');
const next = require('next');
const multer = require('multer');
const PORT = process.env.PORT || 3000;
const express = require("express");
var fs = require('fs');
const FileReader = require('filereader');
var exec = require('child_process').exec;
var instance = require('./ethereum/store');
var ipfsClient = require('ipfs-http-client')
var bodyParser= require('body-parser')
var estore = require('./ethereum/store');
var web3 = require('./ethereum/web3');
var Router  = require('./routes');
var Link  = require('./routes');

//var ipfs = ipfsClient({ host: 'localhost', port: '5001', protocol: 'https' })
var ipfs = ipfsClient('ipfs.infura.io', '5001', { protocol: 'https' })

//
//Back-end MongoDB connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var DocModel = require('./docschema');
mongoose.connect("mongodb://localhost:27017/dockeeper");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Specifying our application to behave in the production mode.
const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

//Actual code that creates a handler associated with the routes.js we have just created
//and making the next to behave in such a way that, by default it looks for the routes present in the route.js
const routes = require('./routes');
const handler = routes.getRequestHandler(app);

const multerConf = {
  storage : multer.diskStorage({
    destination : function(req, file, next){
      next(null,'./filezz');
    },
  filename: function(req, file, next){
    const ext = file.mimetype.split('/')[1];
    next(null,'Doc'+'.'+ext);
  },
  fileFilter: function(req, file, next){
    if(!file){
      next();
    }
    const pdf = file.mimetype.startsWith('application/');
    if(pdf){
      next(null, true);
    }else{
      next({message: "File type not supported"},false);
    }
  }

  })
};

app
 .prepare()
 .then(() => {
   const server = express();
   server.use(bodyParser.urlencoded({ extended : false}))

   verEvent();

   function verEvent(){
    instance.events.verDoc({
     

  }, function(error, event){ console.log(event); })
  .on('data', function(event){
      console.log("Data event in verification:",event.returnValues);
      if(event.returnValues){
      docVer(event.returnValues);
      }
  })
  .on('error', console.log("Error event"));
   }

  function docVer(document1){
    
    console.log("In docVer and doc is", document1.id);
    
    DocModel.findOne( { 'docid': document1.id },function (err, dbDocument) {
   
      if (dbDocument == null) {
        console.log("No document found inorder to verify it!");
       return;
      }
      else {
        console.log("In else loop, doc is",dbDocument);
      console.log("Document found! Verfiying now in MongoDB!", dbDocument);
     dbDocument.status = document1.status;
    
      dbDocument.save(function(error,doc ) {
       if (doc) {  
         console.log("Document is verified successfully in MongoDB :" + doc);
       return;
       }
      });
     }
    })
    
  }
   
  docEvent();

  function docEvent(){
    instance.events.newDoc({
     

  }, function(error, event){ console.log(event); })
  .on('data', function(event){
      console.log("Data event in adding document:",event.returnValues);
      saveDoc(event.returnValues);
  })
  .on('error', console.log("Error event"));
}

function saveDoc(document) {
 DocModel.findOne( {'owner': document.owner, 'docindex':document.index },function (err, dbDocument) {
   
   if (dbDocument != null) {
     console.log("The Document Already Exists in the Database!");

      dbDocument.docid = document.id;
      dbDocument.ipfsImageHash=document.imageLink;

      dbDocument.save(function(error) {
        if (error) {
         console.log("Error while saving to MongoDB",error);
        } else {
         console.log("So updated the data in the document");
         return;
         };
        })

       }
  
   else {
   console.log("The Document Does not Already Exists in the Database. So adding it now!");

   var p = new DocModel({owner: document.owner, docindex: document.index,
    docid: document.id, docname: document.name, ipfsImageHash: document.imageLink,
   uploadTime:document.uploadTime, status:document.status
    });
 
   p.save(function(error, document) {
    if (document) {
     DocModel.count({}, function(err, count) {
      console.log("Total number of documents in database now are : " + count);
     });
     return;
    }
   });
  }
 })
  }
 
 


 var imageHash;

server.get("/index1", function(req, res){
  console.log("refreshed index1.js")
 return app.render(req, res, '/index1')
})

  
 server.post('/upload',multer(multerConf).single('doc'), async function(req, res,next){
 var name = req.body.name;
 var index = req.body.index;


var randd = Math.random();
//PDF Encryption
  var cmd = 'qpdf --encrypt user owner 40 --  filezz/Doc.pdf filezz/'+randd+'.pdf';
 
  await exec(cmd, function (err){
        if (err){
           console.error('Error occured: ' + err);
        }else{
           console.log('PDF encrypted :)');
        }
  });
////////////////////////////////////////////////
setTimeout(red, 5000);
     //IPFS
function red(){
     var file = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\filezz\\'+randd+'.pdf';

     var filez = fs.readFileSync(file);

        ipfs.add(filez, (error, result) => {
          if(error) {
            console.log("ERROR IN ADDING TO IPFS",error)
            return;
          }
        
           imageHash = result[0].hash;
          console.log('ipfsHash :', result[0].hash);

     

          return app.render(req, res, '/confirmdoc', { name:req.body.name, index:req.body.index, imagehash :imageHash} )
      
  })
 
}
 //////////////////////////////////////////////////////////////


  //return app.render(req, res, '/confirmdoc', {imagehash: imageHash});

  });

 






 server.get('/getdoc', function(req, res){
   var owner = req.body.owner;
   DocModel.find({'owner':owner}),function (err, document){
     console.log("FOund Document :",document);
   }
 })

 server.get('/verifydocs', function(req, res){
  DocModel.find({ 'status': 'unverified'}, function (err, docs) {
    var dox = [];
    var dox1 =[];
    var i;
   console.log("Number of Unverified Docs :",docs.length);
   for(i=0;i<docs.length;i++){
     dox.push(docs[i].ipfsImageHash)
     dox1.push(docs[i].docid)
   }
   console.log("Dox :", dox);
   return app.render(req, res, '/verify', { ipfs:dox ,ids:dox1 } )
  })
 })


 server.post('/verifyit', function(req, res){
   var id = req.body.id;
   DocModel.findOne({ 'docid': id}, function (err, doc) {
     console.log("Found Doc is", doc)
       doc.status = true;

       doc
       .save(function(err, docupdated) {
         console.log("Updated doc",docupdated)
             
         })
       });
      

/////////////////////////
DocModel.find({ 'status': false}, function (err, docs) {
  var dox = [];
  var dox1 =[];
  var i;
 console.log("Number of Unverified Docs :",docs.length);
 for(i=0;i<docs.length;i++){
   dox.push(docs[i].ipfsImageHash)
   dox1.push(docs[i].docid)
 }
 console.log("Dox :", dox);
 return app.render(req, res, '/verify', { ipfs:dox ,ids:dox1 } )
})
      })

      server.get('/ind1', function(req, res){
        console.log("Ind1 called")
        return app.render(req, res, '/index1' )
      })


      server.get('/verifyit', function(req, res){
        DocModel.find({ 'status': false}, function (err, docs) {
          var dox = [];
          var dox1 =[];
          var i;
         console.log("Number of Unverified Docs :",docs.length);
         for(i=0;i<docs.length;i++){
           dox.push(docs[i].ipfsImageHash)
           dox1.push(docs[i].docid)
         }
         console.log("Dox :", dox);
         return app.render(req, res, '/verify', { ipfs:dox ,ids:dox1 } )
      })
    })

    server.get('/mydocs', function(req, res){
      return app.render(req, res, '/index1' )
    })



  server.post('/mydocs', function(req, res){
     var account = req.body.account;
     var i;
     var ipfs =[];
     var names =[];
     var status =[];
     console.log("Account is :",account);
     DocModel.find({ 'owner': account}, function (err, docs) {
      console.log("FOUND DOCS", docs);
      
      for(i=0;i<docs.length;i++){
        ipfs.push(docs[i].ipfsImageHash)
        names.push(docs[i].docname)
        status.push(docs[i].status)
      }
      
      return app.render(req, res, '/mydocs', { ipfs:ipfs ,names:names,status:status } );
     })
  })


 

    server.get('/test',function(req, res){
      res.json({ msg: 'TEst Success!' })
      });
  

   server.get("*", (req, res) => {
     return handler(req, res);
   })


   server.listen(PORT, err => {
     if(err) throw err;
     console.log('> Ready on Port:3000')
   })
 })

