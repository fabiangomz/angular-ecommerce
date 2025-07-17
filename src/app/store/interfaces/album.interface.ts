export interface Album {
  id?: number;
  artistId: number;
  name: string;
  genre?: string;
  price: number;
  image?: string;
  description?: string;
  releaseDate?: string;
  songs: [];
}
