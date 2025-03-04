import { Component } from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(protected themeService: ThemeService) {
  }
}
