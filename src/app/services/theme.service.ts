import {inject, Injectable, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly currentTheme = signal<Theme>('light');

  constructor() {
    this.setTheme(localStorage.getItem('theme') as Theme ?? 'light');
  }

  toggleTheme(){
    if (this.currentTheme() === 'dark') {
      this.setTheme('light');
    }else{
      this.setTheme('dark');
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark-mode');
    }else{
      this.document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }
}
