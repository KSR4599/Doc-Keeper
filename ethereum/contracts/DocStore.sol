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
    bool status;
     }
     
     
     mapping (uint => address) docInStore;
     mapping (address => mapping(uint => Document)) alldocs;
    
    event newDoc(uint index, uint id, string name, string imageLink, uint uploadTime, address owner, bool status);

     function addDocumentToStore(string memory _name, string memory _imageLink, uint docIndex) public returns(string memory){
   
         address owner = msg.sender;
         uint random = uint(keccak256(abi.encodePacked(now, msg.sender, _imageLink)))%100000000000000;
         uint now1 = now;
        Document memory document = Document(docIndex,random, _name, _imageLink, now1, owner, false);
  
         alldocs[msg.sender][docIndex] = document;
         docInStore[docIndex] = msg.sender;

       
       emit newDoc(docIndex,random, _name, _imageLink, now1, owner, false);
     }
     

     function getDoc(uint _docIndex) public view returns (uint, uint, string memory,string memory, uint, address, bool) {
         Document memory dox = alldocs[docInStore[_docIndex]][_docIndex];
         
         return (dox.index, dox.id, dox.name,dox.imageLink, dox.uploadTime, dox.owner, dox.status);
        
     }
      function verifyDoc(uint _docIndex) public view returns (uint, uint, string memory,string memory, uint, address, bool) {
         Document memory dox = alldocs[docInStore[_docIndex]][_docIndex];
         dox.status = true;
         return (dox.index, dox.id, dox.name,dox.imageLink, dox.uploadTime, dox.owner, dox.status);
        
     }
     
     

     constructor() public{

     }
}