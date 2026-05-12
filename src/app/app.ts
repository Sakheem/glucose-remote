import { Component } from '@angular/core';
import { GlucoseDashboard } from './glucose-dashboard/glucose-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GlucoseDashboard],
  template: `
    <app-glucose-dashboard></app-glucose-dashboard>
  `,
})
export class App {}