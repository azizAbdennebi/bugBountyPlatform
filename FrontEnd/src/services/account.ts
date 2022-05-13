function exists() {
  if (localStorage.getItem("name") == null || localStorage.getItem("mail") == null) {
    account.status = false;
    return false;
  }

  return true;
}

class account {
  name: string;
  mail: string;
  password: string;
  type;
  string;
  static status = exists();
  constructor(Name: string, Mail: string, Password: string) {
    this.name = Name;
    this.mail = Mail;
    this.password = Password;
    account.status = true;
  }
  static deconnection(): void {
    localStorage.removeItem("name");
    localStorage.removeItem("mail");
    account.status = false;
    window.location.reload();
  }
  static loadFromLocal() {
    if (exists()) {
      // a terminer
      var name = "";
      if (localStorage.getItem("name") != null) {
        name = localStorage.getItem("name");
      }

      var mail = "";

      if (localStorage.getItem("mail") != null) {
        mail = localStorage.getItem("mail");
      }
      var acc = new account(name, mail, "");
      return acc;
    }
    return null;
  }
  setLocal() {
    localStorage.setItem("name", this.name);
    localStorage.setItem("mail", this.mail);

    //localStorage.setItem("name",c.name);
  }

  getStatus() {
    return account.status;
  }
}
export default account;
