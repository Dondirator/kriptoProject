export class TeamMember {
  public id: number;
  public imgPath: string;
  public nickname: string;
  public desc: string;

  constructor(id: number, imgPath: string, nickname: string, desc: string) {
    this.id = id;
    this.imgPath = imgPath;
    this.nickname = nickname;
    this.desc = desc;
  }
}
