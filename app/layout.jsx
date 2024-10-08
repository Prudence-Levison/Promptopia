import '@styles/global.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const  metadata ={
title: 'promptopia',
description: 'Discover & share AI prompt'
}

const RootLayout = ( {children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
            <div className='gradient' />

        </div>
        <main className='app'>
            <Navbar />
         {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout