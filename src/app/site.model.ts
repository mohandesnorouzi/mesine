export class ValueProposition {
  public title: string;
  public imagePath: string;

  constructor(title: string, imagePath: string) {
    this.title = title;
    this.imagePath = imagePath;
  }
}


export class Services {
  public title: string;
  public imagePath: string;

  constructor(title: string, imagePath: string) {
    this.title = title;
    this.imagePath = imagePath;
  }
}

export class PopularMenu {
  public imagePath: string;

  constructor(imagePath: string) {
    this.imagePath = imagePath;
  }
}

export class News {
  public postURL: string;
  public title: string;
  public summary: string;
  public imagePath: string;
  public date: string;
  public time: string;


  constructor(postURL: string, title: string, summary: string, imagePath: string, date: string, time: string) {
    this.postURL = postURL;
    this.title = title;
    this.summary = summary;
    this.imagePath = imagePath;
    this.date = date;
    this.time = time;
  }
}

export class OneNews {
  public title: string;
  public content: string;
  public imagePath: string;
  public date: string;
  public time: string;

  constructor(title: string, content: string, imagePath: string, date: string, time: string) {
    this.title = title;
    this.content = content;
    this.imagePath = imagePath;
    this.date = date;
    this.time = time;
  }
}

export class MainFoods {
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, description: string, imagePath: string) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
}

export class Starters {
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, description: string, imagePath: string) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
}

export class Salads {
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, description: string, imagePath: string) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
}

export class Drinks {
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, description: string, imagePath: string) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
}

export class Desserts {
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, description: string, imagePath: string) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
}
