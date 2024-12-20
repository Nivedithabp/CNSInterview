import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    this.router.navigate(['/anatomicalstructures'], {
      queryParams: { search: this.searchQuery }
    });
  }
}
