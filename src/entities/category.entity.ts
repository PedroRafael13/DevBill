type CategoryProps = {
  title: string,
  color: string,
  _id?: string
}

export class Category {
  public _id?: string;
  public title: string;
  public color: string;

  constructor({ title, color, _id }: CategoryProps) {
    this._id = _id;
    this.title = title;
    this.color = color.toUpperCase();
  }
}