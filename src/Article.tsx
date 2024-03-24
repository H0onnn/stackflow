import { ActivityComponentType, useActivity } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from './stackflow';

type ArticleParams = {
  title: string;
};
const Article: ActivityComponentType<ArticleParams> = ({
  params: { title },
}) => {
  const { pop } = useFlow();
  const activity = useActivity();

  console.log(activity.transitionState);

  const onClick = () => {
    pop();
  };

  return (
    <AppScreen appBar={{ title: 'Article' }}>
      <div>
        <h1>{title}</h1>
        <button onClick={onClick}>back</button>
      </div>
    </AppScreen>
  );
};

export default Article;
