pragma solidity >=0.4.22 <0.6.0;

contract EcommerceStore{
    
    //if New, stores zero in blockchain and if Used, stores 1 
    enum ProductCondition {New, Used}
    
    uint public productIndex;
    
    //stores is a mapping of a mapping, which for each seller, we can find the product through the index of that product
    mapping (address => mapping(uint => Product)) stores;
    
    //another mapping where given an product id, it returns the address of the owner of the Product
    mapping (uint => address) productIdInStore;
    
    //This is the structure of each product
    struct Product {
    uint id;
    string name;
    string category;
    string imageLink;
    string descLink;
    uint startTime;
    uint price;
    ProductCondition condition;
    address buyer;
     }
     
     //function for adding the product
     function addProductToStore(string memory _name, string memory _category, string memory _imageLink, string memory _descLink, uint _startTime, uint _price, uint _productCondition) public {
         productIndex +=1;
         Product memory product = Product(productIndex, _name, _category, _imageLink, _descLink, _startTime, _price, ProductCondition(_productCondition), 0xa78faaa878fdab19F5e269A66b026ec31eA2C026);
     
         stores[msg.sender][productIndex] = product;
         productIdInStore[productIndex] = msg.sender;
     }
     
     //function for returning the product based on its id
     function getProduct(uint _productId) public view returns (uint, string memory,string memory,string memory, string memory, uint, uint, ProductCondition, address) {
         Product memory product = stores[productIdInStore[_productId]][_productId];
         
         return (product.id, product.name, product.category, product.imageLink,product.descLink,product.startTime,product.price, product.condition, product.buyer);
     }
     
     constructor() public{
         productIndex = 0;
     }
}