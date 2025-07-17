import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  albumService = inject(AlbumsService);

  albums = this.albumService.albums;
  constructor() {
    this.albumService.loadAlbums();
  }
}
