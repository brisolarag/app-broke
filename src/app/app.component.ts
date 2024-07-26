import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './sections/header/nav/nav.component';
import { SideComponent } from './sections/main/aside/side/side.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'broken';
}
