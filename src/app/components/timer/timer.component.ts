import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, map, take} from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: false,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent  implements OnInit, OnDestroy {

  @Input({ required: true }) duration!:number;
  timeLeft!: number;
  private timerSubscription: any;

  daysLeft: number = 0;
  hoursLeft: number = 0;
  minutesLeft: number = 0;
  secondsLeft: number = 0;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timeLeft = this.duration;
    this.timerSubscription = interval(1000).pipe(
      take(this.duration + 1),
      map(value => this.duration - value)
    ).subscribe({
      next: (time) => {
        this.timeLeft = time;
        this.evaluate();
      },
      complete: () => console.log("Таймер завершен!")
    });
  }

  evaluate(){

    this.secondsLeft = this.timeLeft % 60;

    let minutes = this.divide(this.timeLeft, 60)
    this.minutesLeft = minutes % 60;

    let hours = this.divide(minutes, 60);

    this.hoursLeft = hours % 24;

    this.daysLeft = this.divide(hours, 24);
  }

  divide(val: number, by: number){
    return (val - val % by) / by;
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }
}
