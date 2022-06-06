import account from "../Models/account";
import localAccount from "../dummyData/account";

export default function GetLocalAccountData() {
  var acc = new account(
    localAccount.name,
    localAccount.mail,
    "test123",
    localAccount.type,
    localAccount.mobile,
    localAccount.location,
    localAccount.image
  );
  account.status = true;
  account.mainAccount = acc;
  return (acc);
}
