import * as React from 'react';
import ResourceList from './ResourceList';

interface State {
  resource: string;
}

const App = () => {
  const [resource, setResource] = React.useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Post</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;