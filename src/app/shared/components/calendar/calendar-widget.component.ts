import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-widget.component.html'
})
export class CalendarWidgetComponent implements OnInit {

  currentDate: Date = new Date();
  selectedDate: Date | null = null;

  daysInMonth: Date[] = [];

  today: Date = new Date();

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const lastDay = new Date(year, month + 1, 0);

    const days: Date[] = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    this.daysInMonth = days;
  }

  prevMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );

    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );

    this.generateCalendar();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  isToday(day: Date): boolean {
    return day.toDateString() === this.today.toDateString();
  }

  isSelected(day: Date): boolean {
    return this.selectedDate
      ? day.toDateString() === this.selectedDate.toDateString()
      : false;
  }
}