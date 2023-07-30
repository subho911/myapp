import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent {

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          icon: 'lock-outline'
        },
        {
          title: 'Privacy Policy',
          icon: { icon: 'checkmark-outline', pack: 'eva' }
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
      icon: 'activity-outline'
    },
    {
      title: 'Orders',
    },
  ];
}
