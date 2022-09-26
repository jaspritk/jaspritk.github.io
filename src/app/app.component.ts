import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jaspritk.github.io';

  // date:any = Date.now();
  year:any = new Date().getFullYear();

  
}
