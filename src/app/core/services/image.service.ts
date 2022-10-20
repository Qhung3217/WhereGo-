import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  defaultImage = environment.defaultImage;
  constructor() {}

  render(imagename: string) {
    return environment.apiURL + 'render/' + imagename;
  }
}
