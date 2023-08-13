import '@styles/globals.css';

export const metadata = {
    title: 'Promptodo',
    description: 'Discover & Share AI Prompts and Ideas'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className='gradient' />
            </div>

            <main className='app'>
                {children}
            </main>
        </body>

    </html>
  )
}

export default Rootlayout;