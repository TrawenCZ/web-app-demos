import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CurrentSong, CurrentSongProps } from './CurrentSong';

export default {
  title: 'Spotify/Current Song',
  component: CurrentSong,
} as ComponentMeta<typeof CurrentSong>;

const Template:
    ComponentStory<typeof CurrentSong> = (props: CurrentSongProps) => <CurrentSong {...props} />;

export const NGGYU = Template.bind({});
NGGYU.args = {
  image: 'https://i.scdn.co/image/ab67616d000048515755e164993798e0c9ef7d7a',
  songName: 'Never Gonna Give You Up',
  artistName: 'Rick Astley',
};

export const Giorgo = Template.bind({});
Giorgo.args = {
  image: 'https://i.scdn.co/image/ab67616d000048511d97ca7376f835055f828139',
  songName: 'Giorgo by Moroder',
  artistName: 'Daft Punk',
};

export const OceanMan = Template.bind({});
OceanMan.args = {
  image: 'https://i.scdn.co/image/ab67616d0000485135010b7368af2e4968d46f22',
  songName: 'Ocean Man',
  artistName: 'Ween',
};
