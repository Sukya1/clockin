import Navbar from './Navbar';
import MainSetupComponent from './MainSetupComponent';
import { useEffect, useState } from 'react';
import { PageState, initialPageState } from "../types";

function SetupPage() { 
    const [page, setPage] = useState<PageState>(initialPageState); 

    useEffect(() => {
        setPage({...initialPageState, Jira: true });
    }, []);
    
    return (
        <>
            <Navbar page={page} setPage={setPage}></Navbar>
            <MainSetupComponent page={page} setPage={setPage}></MainSetupComponent>
        </>
    );
}
export default SetupPage;