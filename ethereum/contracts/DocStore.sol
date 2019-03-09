pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract DocStore{

    struct Document {
    uint index;
    uint id;
    string name;
    string imageLink;
    uint uploadTime;
    address owner;
    string status;
     }
     
     
     mapping (uint => address) docInStore;
     mapping (address => mapping(uint => Document)) alldocs;
     mapping(uint => Document) alldox;
    
    event newDoc(uint index, uint id, string name, string imageLink, uint uploadTime, address owner, string status);
    event verDoc(uint index, uint id, string name, string imageLink, uint uploadTime, address owner, string status);

     function addDocumentToStore(string memory _name, string memory _imageLink, uint docIndex) public returns(string memory){
   
         address owner = msg.sender;
         uint random = uint(keccak256(abi.encodePacked(now, msg.sender, _imageLink)))%1000000000;
         uint now1 = now;
        Document memory document = Document(docIndex,random, _name, _imageLink, now1, owner, "unverified");
  
         alldocs[msg.sender][docIndex] = document;
         docInStore[docIndex] = msg.sender;
         alldox[random] = document;
       
       emit newDoc(docIndex,random, _name, _imageLink, now1, owner, "unverified");
     }
     

     function getDoc(uint _docIndex) public view returns (uint, uint, string memory,string memory, uint, address, string memory) {
         Document memory dox = alldocs[docInStore[_docIndex]][_docIndex];
         
         return (dox.index, dox.id, dox.name,dox.imageLink, dox.uploadTime, dox.owner, dox.status);
        
     }
      function verifyDoc(uint _docId) public returns (uint, uint, string memory,string memory, uint, address, string memory) {
         
         Document memory  doc1 = alldox[_docId];
         doc1.status = "verified";
         emit verDoc(doc1.index, doc1.id, doc1.name, doc1.imageLink, doc1.uploadTime, doc1.owner, doc1.status);
         
        return (doc1.index, doc1.id, doc1.name,doc1.imageLink, doc1.uploadTime, doc1.owner, doc1.status);
        
     }
     
     

     constructor() public{

     }
}