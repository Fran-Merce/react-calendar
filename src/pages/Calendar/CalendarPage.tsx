import { Navbar } from '@/components/Navbar';
import { Calendar, Event, View } from 'react-big-calendar';
import { useState } from 'react';
import { addHours } from 'date-fns';
import { CalendarEventExt, EventStyle } from './models/events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer } from './helpers/calendarLocalizer';
import { getMessagesEs } from './helpers/messages';
import { CalendarEvent } from './components';

export const CalendarPage = () => {
  const DefaultView = 'month' as View;
  const getLocalStorage = (localStorage.getItem('lastView') as View) || DefaultView;
  const [lastView, setLastView] = useState<View>(getLocalStorage);

  function eventStyleGetter() {
    const style: EventStyle = {
      backgroundColor: '#f80025',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };
    return {
      style,
    };
  }

  const onDoubleClick = (e: Event) => {
    console.log('double click', e);
  };
  const onSelectEvent = (e: Event) => {
    console.log('onSelectEvent', e);
  };
  const onViewChanged = (view: View) => {
    localStorage.setItem('lastView', view);
    setLastView(view);
  };

  const events: CalendarEventExt[] = [
    {
      title: 'My event 2 de nashesx nashex',
      allDay: false,
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#000',
      user: {
        _id: '123',
        name: 'Fran',
      },
    },
  ];
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        defaultView={lastView}
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 80px)', whiteSpace: 'normal' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChanged}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};
