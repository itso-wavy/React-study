import React from 'react';
import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
};

const STORY_TEXT = 'I love Storybook!';

export const Default = () => <Text>{STORY_TEXT}</Text>;

export const Red = () => <Text color='red'>{STORY_TEXT}</Text>;

export const Italic = () => <Text italic>{STORY_TEXT}</Text>;

export const Underline = () => <Text underline>{STORY_TEXT}</Text>;
