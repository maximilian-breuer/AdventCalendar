export interface Gift {
  caption: String;
  content: ContentImage | String;
  day: Number;
  width: Number;
  height: Number;
}

export interface ContentImage {
  url: String;
}

export class ContentImage {
  url: String;
  constructor(url: String) {
    this.url = url;
  }
}
