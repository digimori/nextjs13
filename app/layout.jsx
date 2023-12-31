import '@styles/globals.css';

import Navbar from '@components/Navbar';
import Provider from '@components/Provider';


export const metadata = {
    title: 'Promptodo',
    description: 'Discover & Share AI Prompts and Ideas'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className="main">
                <div className='gradient' />
            </div>
            <main className='app'>
                <Navbar />
                {children}
            </main>
            </Provider>
        </body>

    </html>
  )
}

export default Rootlayout;