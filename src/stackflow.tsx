import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

import MyActivity from './MyActivity';
import Article from './Article';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    MyActivity,
    Article,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    () => ({
      key: 'tony',
      onPushed({ effect }) {
        console.log(effect.activity.name);
      },
    }),
  ],
  initialActivity: () => 'MyActivity',
});
