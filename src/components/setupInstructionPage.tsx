import { NavigationProps, PageState } from "../types";
import { constants } from '../constants';
import '../stylesheets/setupInstructionsPage.css';

function getCurrentPage(page: PageState): string {
    if (page.Jira) return constants.JIRA;
    if (page.Tempo) return constants.TEMPO;
    if (page.Preferences) return constants.PREFERENCES;
    return "";
}

function handleSubmit() {
    console.log("Submit button clicked");
    // save the token and proceed to next step
    
    // Update page to move to the next page
}

function setupInstructionPage(
     { page, setPage }: NavigationProps
) {
    const currentPage = getCurrentPage(page) as keyof typeof constants.PAGE_HEADINGS;

    return (
        <>
        <div className="instruction-headings"> 
            {constants.PAGE_HEADINGS[currentPage]}
        </div>
        <div className="instructions-content">
            <p>To connect to your Jira account, please follow the steps below:</p>
            <ol>
                    <li>
                        Navigate to {" "}
                        <a
                            href={page.Jira ? constants.JIRA_SETUP_URL : constants.Tempo_SETUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {page.Jira ? "  Atlassian Jira Token Page" : "Atlassian Tempo Token Page"}
                        </a>
                    </li>
                <li>
                    On the security page, find the section labeled <strong>API tokens/Integration</strong> and
                    create a new API token.
                </li>
                <li>
                    Give your new API token a descriptive name. Your API key will expire in
                    one year, at which time you’ll be prompted to complete this setup again.
                </li>
                <li>Click <strong>Create</strong>. Copy the generated API token immediately and paste it below.</li>  
            </ol>
        </div>
        <div className="token-input-container">
            <textarea rows={5} cols={20} className="token-input" placeholder="Add API Token here..."></textarea>
        </div>
        <div className="token-button-container">
            <button type="button" className="token-button" onClick={handleSubmit}>Next
                <span className="arrow" />
            </button>
        </div>
        </>
    );
}

export default setupInstructionPage;