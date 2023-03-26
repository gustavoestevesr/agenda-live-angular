import { Component } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent {

  previousLives: any = [];
  nextLives: any = [];

  constructor(
    private service: LiveService,
  ) { }

  ngOnInit() {
   this.getLives();
  }

  getLives(){
    this.service.getNextLives().subscribe({
      next: (data) => {
        this.nextLives = data;
        console.log(this.nextLives )
      }, error: (error) => { console.log( error.message ) }
    });

    this.service.getPreviousLives().subscribe({
      next: (data) => {
        this.previousLives = data;
        console.log(this.previousLives )
      }, error: (error) => { console.log( error.message ) }
    });
  }
}
