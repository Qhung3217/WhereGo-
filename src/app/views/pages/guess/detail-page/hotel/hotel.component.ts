import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent {
  address = encodeURIComponent(
    '61C National Road Nhon Khanh Hamlet, Nhon Nghia Ward, Can Tho 904497 Vietnam'
  );
  constructor() {}
}
