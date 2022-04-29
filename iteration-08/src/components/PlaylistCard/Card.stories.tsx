import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Spotify/Playlist Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (props) => <Card {...props} />;

export const JarniChill = Template.bind({});
export const Dopamine = Template.bind({});
export const Pop = Template.bind({});

JarniChill.args = {
  image: 'https://i.scdn.co/image/ab67706f00000002277ea5bb5f307b527e3045ba',
  name: 'Jarní Chill',
  description: 'Jarní chill, co prolomí ledy a povolí i poslední zbytky únorového sněhu.',
};

Dopamine.args = {
  image: 'https://i.scdn.co/image/ab67706f00000002a9e1322caa711b3c585d65bf',
  name: 'Dopamine',
  description: 'play something that\'s very very vibe-worthy',
};

Pop.args = {
  image: 'https://i.scdn.co/image/ab67706f00000002a72fcb006bf628102942895c',
  name: 'Popová nostalgie',
  description: 'Ty největší CZ & SK hity z přelomu 90. let a nového milénia.',
};
