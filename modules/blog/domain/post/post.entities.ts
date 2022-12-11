import { IPost, IPostData } from './post.types';

export class Post implements IPost {
  id: string;

  constructor(data: IPostData) {
    Object.assign(this, data);
  }
}
