import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Artist } from './Artist';

export default {
  title: 'Spotify/Artist',
  component: Artist,
} as ComponentMeta<typeof Artist>;

const Template: ComponentStory<typeof Artist> = () => <Artist />;

export const GlassAnimals = Template.bind({});
GlassAnimals.args = {
  isVerified: true,
  name: 'Glass Animals',
  listenerCount: '41,703,289',
  isNavigationDisabled: false,
  artistPhoto: 'https://i.scdn.co/image/ab6761610000e5eb66b27eccb69756f8eceabc23',
};

export const TheWeeknd = Template.bind({});
TheWeeknd.args = {
  isVerified: true,
  name: 'The Weeknd',
  listenerCount: '77,931,916',
  isNavigationDisabled: true,
  artistPhoto: 'https://i.scdn.co/image/ab67616d00001e024ab2520c2c77a1d66b9ee21d',
};
