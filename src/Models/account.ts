import { string } from "prop-types";

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
  type: string;
  mobile: string;
  location: string;
  image: string;
  static status = exists();
  static mainAccount: account;

  constructor(
    Name: string,
    Mail: string,
    Password: string,
    Type: string,
    mobile: string,
    location: string,
    Image: string
  ) {
    this.name = Name;
    this.mail = Mail;

    this.type = Type;
    account.status = true;
    this.mobile = mobile;
    this.location = location;
    this.image = Image;
    this.setLocal();
    account.mainAccount = this;
    account.status = true;
  }

  setImage(img: string) {
    this.image = img;
  }
  getImage() {
    return this.image;
  }

  static deconnection(): void {
    localStorage.clear();
    account.status = false;
    delete account.mainAccount;
  }
  static loadFromLocal() {
    if (exists()) {
      // a terminer
      var name: string;
      if (localStorage.getItem("name") != null) {
        name = localStorage.getItem("name");
      }
      // console.log(localStorage.getItem("test"));

      var mail: string;
      var type: string;
      var mobile: string;
      var location: string;
      var Image: string;
      if (localStorage.getItem("mail") != null) {
        mail = localStorage.getItem("mail");
      }
      if (localStorage.getItem("type") != null) {
        type = localStorage.getItem("type");
      }
      if (localStorage.getItem("type") != null) {
        mobile = localStorage.getItem("mobile");
      }
      if (localStorage.getItem("type") != null) {
        location = localStorage.getItem("location");
      }

      location = localStorage.getItem("image");

      var acc = new account(name, mail, "", type, mobile, location, Image);

      return acc;
    }
    return null;
  }
  setLocal() {
    localStorage.setItem("name", this.name);
    localStorage.setItem("mail", this.mail);
    localStorage.setItem("type", this.type);
    localStorage.setItem("mobile", this.mobile);
    localStorage.setItem("location", this.location);
    localStorage.setItem("image", this.image);
    account.mainAccount = this;
    //localStorage.setItem("name",c.name);
  }

  getName() {
    if (account.getStatus()) return this.name;
    return null;
  }
  getMail() {
    if (account.getStatus()) return this.mail;
  }
  getMobile() {
    if (account.getStatus()) return this.mobile;
  }
  getLocation() {
    if (account.getStatus()) return this.location;
  }
  getType() {
    if (account.getStatus()) return this.type;
  }

  static getStatus() {
    return account.status;
  }
}
export default account;
