import { NavigationProps } from "../types";
import '../stylesheets/mainSetupComponent.css';
import SetupInstructionPage from "./setupInstructionPage";

// we need a useEffect to grab data from store to see if user has done setup already, if they have we don't have to show all this. we can keep user on the welcome page
function MainSetupComponent(
  { page, setPage }: NavigationProps
) {
    return (
        <main>
            <div className="setup-main">
                {page.Jira && 
                    <SetupInstructionPage page={page} setPage={setPage}></SetupInstructionPage>
                }
                {page.Tempo && 
                    <SetupInstructionPage page={page} setPage={setPage}></SetupInstructionPage>
                }
                {page.Preferences && 
                    <div>Preferences Setup Component</div>
                }
            </div>
        </main>
    );
}

export default MainSetupComponent;