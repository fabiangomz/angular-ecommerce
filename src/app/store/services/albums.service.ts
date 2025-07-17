import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private http = inject(HttpClient);

  albums = signal<Album[]>([]);

  constructor() {}

  loadAlbums() {
    this.http.get<Album[]>('http://localhost:8080/albums').subscribe({
      next: (albums) => {
        console.log('Albums loaded:', albums);
        this.albums.set(albums);
      },
      error: (err) => {
        console.error('Failed to load albums', err);
      },
    });
  }
}
