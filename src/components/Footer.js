import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © 2022. All rights reserved &nbsp;
        <a className='text-white' href='#'>
          MUVIEE.com
        </a>
      </div>
    </MDBFooter>
  );
}