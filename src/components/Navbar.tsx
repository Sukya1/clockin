import AnimatedOwlClock from '../assets/AnimatedOwlClock.png'
import '../stylesheets/navbar.css'
import { NavigationProps, initialPageState } from "../types";
import { constants } from '../constants';


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
                    <a onClick={handleClick(constants.JIRA)}>Jira </a>
                    <a onClick={handleClick(constants.TEMPO)}>Tempo </a>
                    <a onClick={handleClick(constants.PREFERENCES)}>Preferences</a>
                </div>
            </div>
        </main>
    );
}

export default Navbar;