import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.themeService.theme = localStorage.getItem('theme') ?? '';
    }
  }

  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : 'light';
  }
  
}
