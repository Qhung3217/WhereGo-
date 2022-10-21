import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  defaultImage = environment.defaultImage;
  get default() {
    return environment.apiURL + 'render/' + environment.defaultImageBE;
  }
  constructor() {}

  render(imagename: string) {
    return environment.apiURL + 'render/' + imagename;
  }
}
