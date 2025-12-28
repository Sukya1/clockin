import AnimatedOwlClock from '../assets/AnimatedOwlClock.png'
import '../stylesheets/navbar.css'
import { NavigationProps, initialPageState } from "../types";


function Navbar(
    { page, setPage }: NavigationProps
) {
    const handleClick = (pageName: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {   
        setPage({...initialPageState, [pageName]: true });
    };

    return (
        <main>
            <div className="sidenav">
                <img src={AnimatedOwlClock} alt="Animated Owl Clock"/>
                <div className='nav-links'> 
                    <a onClick={handleClick("Jira")}>Jira </a>
                    <a onClick={handleClick("Tempo")}>Tempo </a>
                    <a onClick={handleClick("Outlook")}>Outlook </a>
                    <a onClick={handleClick("Preferences")}>Preferences</a>
                </div>
            </div>
        </main>
    );
}

export default Navbar;