import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users : any[] = [];
  constructor(private apiService: AppService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((res) => {
      this.users = res.data as any;
      console.log(this.users,'users')
    });
  }
}
