import { Genre } from './Genre';
import { Album } from './Album';

export class Artist {
   id: number;
   name: string;
   genres: Genre[];
   images: any;
   albums: Album[];
}