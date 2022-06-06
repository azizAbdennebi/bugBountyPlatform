import colors from "assets/theme/base/colors";

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
    return <h1>account Type error</h1>;
  }
  console.log("not logged in");
  return <h1>not logged in</h1>;
}

export default Dashboard;
