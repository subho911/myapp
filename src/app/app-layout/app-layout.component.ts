import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { tap, map, take, filter } from 'rxjs/operators';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit{
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    public auth: AuthService) {
  }


  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  ngOnInit() {
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {if(title==='Log out') this.auth.signOut()});
  }

}
