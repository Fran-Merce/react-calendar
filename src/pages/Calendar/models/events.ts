import { Event as calendarEvent, Event } from 'react-big-calendar';

export interface CalendarEventExt extends calendarEvent {
  bgColor?: string;
  user: {
    _id: string;
    name: string;
  };
}

export interface EventStyle {
  backgroundColor: string;
  borderRadius: string;
  opacity: number;
  color: string;
}
