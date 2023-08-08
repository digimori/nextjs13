'use client'; // Error components must be Client components

import { useEffect } from "react";

const Error =({ error, reset }) => {
    useEffect(() => {
        // Log the error
        console.error(error);
    }, [error]);
    
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button 
            onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset() 
            }>Try Again</button>
        </div>
    );
}

export default Error