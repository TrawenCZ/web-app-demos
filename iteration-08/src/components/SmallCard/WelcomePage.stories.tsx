import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WelcomePage } from './WelcomePage';

export default {
  title: 'Spotify/Welcome Page',
  component: WelcomePage,
} as ComponentMeta<typeof WelcomePage>;

const Template: ComponentStory<typeof WelcomePage> = () => <WelcomePage />;

export const Page = Template.bind({});
