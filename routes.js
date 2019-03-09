const routes = require('next-routes') ();

//Now we shall add the new route for handling the view Campaign
//Here the : (colon) signifies that, that part of the url is wildcard or the incoming data variable.
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/index1','/index1')
  .add('/testroute', '/testroute')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
