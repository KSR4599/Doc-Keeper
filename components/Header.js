import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style = {{ marginTop: '10px'}}>

  <Link route= "/">
   <a className = "item">UPX Document Keeper</a>
   </Link>
   <Link route= "/mydocs">
   <a className = "item">My Documents</a>
   </Link>
   <Link route= "/verifydoc">
   <a className = "item">Verify Documents</a>
   </Link>



     <Menu.Menu position = "right">

     <Link route= "/adddoc">
      <a className = "item">Upload a Document</a>
      </Link>

      <Link route= "/adddoc">
      <Button
        icon = "plus square outline"
        secondary = { true }
       />
       </Link>

     </Menu.Menu>

     </Menu>
  )
}
