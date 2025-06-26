import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateProps{
    children: ReactNode;
}

export function Private({ children }: PrivateProps): any{
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) =>{
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem("@reactlink", JSON.stringify(userData))
                setLoading(false);
                setSigned(true);

            }else{
                setLoading(false);
                setSigned(false);
            }
        })

        return () => {
            unsub();
        }
    }, [])


    if(loading){
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
    }

    if(!signed){
        return <Navigate to="/login" />
    }

    return children;
     
}