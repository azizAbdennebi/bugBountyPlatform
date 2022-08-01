import account from "./account";

class report {
  title: string;
  description: string;
  impact: string;
  author: account;
  attachement: File;

  constructor(title: string, description: string, impact: string) {
    this.title = title;
    this.description = description;
    this.impact = impact;
    this.author = account.loadFromLocal();
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }
  getImpact() {
    return this.impact;
  }
  getAuthor() {
    return this.author;
  }
}

export default report;
