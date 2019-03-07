'use strict';

var routes = require('next-routes')();

//Now we shall add the new route for handling the view Campaign
//Here the : (colon) signifies that, that part of the url is wildcard or the incoming data variable.
routes.add('/campaigns/new', '/campaigns/new').add('/testroute', '/testroute').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsa0JBRUcsQUFGSCxJQUVPLEFBRlAsY0FFcUIsQUFGckIsY0FHRyxBQUhILElBR08sQUFIUCx1QkFHOEIsQUFIOUIsbUJBSUcsQUFKSCxJQUlPLEFBSlAsZ0NBSXVDLEFBSnZDLDZCQUtHLEFBTEgsSUFLTyxBQUxQLG9DQUsyQyxBQUwzQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tzcmVkL0Rvd25sb2Fkcy9aelovRG9jdW1lbnQtS2VlcGVyLW1hc3RlciJ9