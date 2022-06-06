import account from "../Models/account";

const allReports = [
  {
    title: "first report",
    description: "this is a high severity impact report that can have confidentiality breach",
    impact: "high",
    author: account.mainAccount,
  },
  {
    title: "second report",
    description: "this is a medium severity impact report that can make DOS attacks",

    impact: "medium",
    author: account.mainAccount,
  },
  {
    title: "third report",
    description: "this is a high severity impact report ",

    impact: "high",
    author: account.mainAccount,
  },
];

export default allReports;
