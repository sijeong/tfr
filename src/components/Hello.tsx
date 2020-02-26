import React, { useState, useEffect } from 'react'
import { getDefaultNormalizer } from '@testing-library/react'

interface HelloState {
    user: {
        name: string;
    }
}
export const Hello: React.FC = () => {
    const [state, setState] = useState<HelloState>({
        user: {
            name: ''
        }
    })

    async function getData() {
        try {

            //https://api-int.icloudhospital.com/api/v1/countries
            const res = await fetch('')
            if (res.status >= 400) {
                throw new Error("something went wrong")
            }

            const user = await res.json();
            setState({ user })
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData
    }, [])

    return (
        <div>
            <h2>Welcome to hello</h2>

            {state.user ? <p>user: {state.user.name}</p> : <span></span>}
        </div>
    )
}