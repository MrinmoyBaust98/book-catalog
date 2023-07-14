// Books Types
export interface IBooks {
  title: string;
  author: string;
  genre: string;
  status: boolean;
  publicationDate: string;
  rating?: number;
  review: string[];
}
