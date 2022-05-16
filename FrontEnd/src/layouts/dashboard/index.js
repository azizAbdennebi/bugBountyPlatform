// @mui material components
// Vision UI Dashboard React components

// Vision UI Dashboard React example components

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components

// React icons

// Data
// import  DefaultProjectCard  from "examples/Cards/ProjectCards/DefaultProjectCard";
import account from "../../Models/account";
import SecurityResearcherDashboard from "./dashboardTypes/securityResearcher";
import DataAnalystDashboard from "./dashboardTypes/dataAnalyst";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  if (account.status) {
    if (account.mainAccount.getType() == "security researcher") {
      return <SecurityResearcherDashboard />;
    }
    if (account.mainAccount.getType() == "data analyst") {
      return <DataAnalystDashboard />;
    }
  }

  return <h1>account Type error</h1>;
}

export default Dashboard;
