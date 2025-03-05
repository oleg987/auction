import {Component, Input, OnInit} from '@angular/core';

export interface Auction{
  id: string;
  title: string;
  start: string;
  end: string;
}

@Component({
  selector: 'app-auction-list-item',
  standalone: false,
  templateUrl: './auction-list-item.component.html',
  styleUrl: './auction-list-item.component.scss'
})
export class AuctionListItemComponent implements OnInit{
  @Input({required: true}) auction!: Auction;
  duration: number = 0;

  ngOnInit(): void {
    this.duration = this.evaluateDuration();
  }

  isActive() : boolean {
    return Date.now() > Date.parse(this.auction.start) && Date.now() < Date.parse(this.auction.end);
  }

  isPast() : boolean{
    return Date.now() > Date.parse(this.auction.end);
  }

  isFuture(){
    return  Date.now() < Date.parse(this.auction.start)
  }

  evaluateDuration() : number {
    let duration = 0;

    if (this.isActive()){
      duration = Math.floor( (Date.parse(this.auction.end) - Date.now()) / 1000);
    }

    if (this.isFuture()){
      duration = Math.floor( (Date.parse(this.auction.start) - Date.now()) / 1000);
    }

    console.log(duration);
    return duration;
  }
}
