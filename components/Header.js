import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style = {{ marginTop: '10px'}}>
         
  <Link route= "/">

  <a className = "item">
  <img src='https://upxacademy.com/wp-content/uploads/black-216x-150-1.png' />
  </a>
   </Link>

  


     <Menu.Menu position = "right">

     

     </Menu.Menu>

     </Menu>
  )
}
