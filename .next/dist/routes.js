'use strict';

var routes = require('next-routes')();

//Now we shall add the new route for handling the view Campaign
//Here the : (colon) signifies that, that part of the url is wildcard or the incoming data variable.
routes.add('/campaigns/new', '/campaigns/new').add('/index1', '/index1').add('/testroute', '/testroute').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsa0JBRUcsQUFGSCxJQUVPLEFBRlAsV0FFaUIsQUFGakIsV0FHRyxBQUhILElBR08sQUFIUCxjQUdxQixBQUhyQixjQUlHLEFBSkgsSUFJTyxBQUpQLHVCQUk4QixBQUo5QixtQkFLRyxBQUxILElBS08sQUFMUCxnQ0FLdUMsQUFMdkMsNkJBTUcsQUFOSCxJQU1PLEFBTlAsb0NBTTJDLEFBTjNDOztBQVFBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=