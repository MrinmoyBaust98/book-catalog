// Books Types
export interface IBooks {
  _id?: number;
  title: string;
  author: string;
  genre: string;
  status: boolean;
  publicationDate: string;
  rating?: number;
  review: string[];
  image?: string;
}
