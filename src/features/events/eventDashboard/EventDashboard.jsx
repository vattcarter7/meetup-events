import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';

const EventDashboard = () => {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  return (
    <Grid>
      <Grid.Column width='10'>
        {loading && (
          <Fragment>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </Fragment>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
