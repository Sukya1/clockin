import { NavigationProps } from "../types";
import '../stylesheets/mainSetupComponent.css';

function MainSetupComponent(
  { page, setPage }: NavigationProps
) {
    return (
        <main>
            <div className="setup-main">
                {page.Jira && 
                    <div>Jira Setup Component</div>
                }
                {page.Tempo && 
                    <div>Tempo Setup Component</div>
                }
                {page.Outlook && 
                    <div>Outlook Setup Component</div>
                }
                {page.Preferences && 
                    <div>Preferences Setup Component</div>
                }
            </div>
        </main>
    );
}

export default MainSetupComponent;