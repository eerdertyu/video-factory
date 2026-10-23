import React from 'react';
import {Composition} from 'remotion';
import {BloggerEarnings} from './Video';

export const Root: React.FC = () => (
  <Composition id="BloggerEarnings" component={BloggerEarnings}
    durationInFrames={1800} fps={30} width={1080} height={1920} />
);
