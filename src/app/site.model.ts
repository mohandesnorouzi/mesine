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
  public title: string;
  public summary: string;
  public imagePath: string;

  constructor(title: string, summary: string, imagePath: string) {
    this.title = title;
    this.summary = summary;
    this.imagePath = imagePath;
  }
}
