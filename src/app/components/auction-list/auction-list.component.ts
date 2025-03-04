import {Component, OnInit} from '@angular/core';
import {Auction} from '../auction-list-item/auction-list-item.component';

@Component({
  selector: 'app-auction-list',
  standalone: false,
  templateUrl: './auction-list.component.html',
  styleUrl: './auction-list.component.scss'
})
export class AuctionListComponent  implements OnInit{
  protected auctions: Auction[] = [];

  ngOnInit(): void {
    this.auctions = [
      {
        id: 'guid',
        title: 'Awesome Auction 1',
        start: new Date(2025, 2, 4).toDateString(),
        end: new Date(2025, 2, 5).toDateString()
      },
      {
        id: 'guid',
        title: 'Awesome Auction 2',
        start: new Date(2025, 3, 4).toDateString(),
        end: new Date(2025, 3, 5).toDateString()
      },
      {
        id: 'guid',
        title: 'Awesome Auction 3',
        start: new Date(2025, 4, 4).toDateString(),
        end: new Date(2025, 4, 5).toDateString()
      },
      {
        id: 'guid',
        title: 'Awesome Auction 4',
        start: new Date(2025, 2, 4).toDateString(),
        end: new Date(2025, 4, 5).toDateString()
      },
    ]
  }
}
