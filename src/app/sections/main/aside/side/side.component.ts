import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss',
})
export class SideComponent {
  isCollapsed: { [key: string]: boolean } = {
    home: true,
    dashboard: true,
    insert: true,
    account: true,
  };

  toggleCollapse(section: string): void {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }
}
