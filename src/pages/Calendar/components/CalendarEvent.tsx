import React from 'react';
import { CalendarEventExt } from '../models/events';
type Props = {
  event: CalendarEventExt;
};
export const CalendarEvent = ({ event }: Props) => {
  const { title, user } = event;
  return (
    <div>
      <strong>{title}</strong>
      <span>- {user.name}</span>
    </div>
  );
};
