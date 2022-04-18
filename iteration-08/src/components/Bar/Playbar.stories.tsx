import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Playbar } from './Playbar';

export default {
  title: 'Spotify/Playbar',
  component: Playbar,
} as ComponentMeta<typeof Playbar>;

const Template: ComponentStory<typeof Playbar> = () => <Playbar />;

export const Bar = Template.bind({});
