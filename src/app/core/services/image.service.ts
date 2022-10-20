import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  defaultImage = environment.defaultImage;
  constructor(private http: HttpClient) {}

  render(imagename: string) {
    return environment.apiURL + 'render/' + imagename;
  }
}
