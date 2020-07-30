import React, { Fragment, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector, useDispatch } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
import {
  getEventsFromFirestore,
  dataFromSnapshot
} from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';

const EventDashboard = () => {
  const dispatch = useDispatch();

  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  useEffect(() => {
    const unsubscribe = getEventsFromFirestore({
      next: (snapshot) =>
        dispatch(
          listenToEvents(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        ),
      error: (error) => console.log(error)
    });

    return unsubscribe;
  }, [dispatch]);

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
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
