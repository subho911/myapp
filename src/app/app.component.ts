import { Component } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService) {
  }

  title = 'my-ngadmin-app';

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
