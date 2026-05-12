import { Component } from '@angular/core';

@Component({
  selector: 'app-glucose-dashboard',
  standalone: true,
  templateUrl: './glucose-dashboard.html',
  styleUrl: './glucose-dashboard.css',
})
export class GlucoseDashboard {
  readings: { glucose: number; date: string; time: string; status: string }[] = [];

  addReading(glucoseValue: string, dateValue: string, timeValue: string) {
    if (!glucoseValue || !dateValue || !timeValue) return;

    const glucoseNumber = Number(glucoseValue);

    let status = 'Normal';
    if (glucoseNumber < 70) status = 'Low';
    else if (glucoseNumber > 180) status = 'High';

    this.readings = [...this.readings, {
      glucose: glucoseNumber,
      date: dateValue,
      time: timeValue,
      status
    }];
  }
}

export { GlucoseDashboard as Card };