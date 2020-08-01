import React, { useState, Fragment } from 'react';
import { Grid, Header, Button, Tab } from 'semantic-ui-react';
import { format } from 'date-fns';

const AboutTab = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated='left'
            icon='user'
            content={`About ${profile.displayName}`}
          />
          <Button
            onClick={() => setEditMode(!editMode)}
            floated='right'
            basic
            content={editMode ? 'Cancel' : 'Edit'}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <p>Profile Form</p>
          ) : (
            <Fragment>
              <div style={{ marginBottom: 10 }}>
                <strong>
                  Memeber since: {format(profile.createdAt, 'dd MMM yyyy')}
                </strong>
                <div>{profile.description || null}</div>
              </div>
            </Fragment>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default AboutTab;
