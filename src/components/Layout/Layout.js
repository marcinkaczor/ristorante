import React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';

const layout = (props) => (
  <div>
    <header>
      <AppNavbar />
    </header>
    <main>
      {props.children}
    </main>
  </div>
);

export default layout;