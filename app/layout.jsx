import '@styles/global.css';
import { Children } from 'react';

export const  metadata ={
title: 'promptopia',
description: 'Discover & share AI prompt'
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
            <div className='gradient' />

        </div>
        <main className='app'>
         {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout