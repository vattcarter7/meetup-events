import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const EventDashboard = () => {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  if (loading) return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width='10'>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
