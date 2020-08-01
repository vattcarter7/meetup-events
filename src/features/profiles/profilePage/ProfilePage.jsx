import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileHeader from './ProfileHeader';

const ProfilePage = () => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader />
        <h2>Profile content</h2>
      </Grid.Column>
    </Grid>
  );
};

export default ProfilePage;
