import * as React from 'react';
import axios from 'axios';

const useResources: (<T>(resource: string) => T[]) = resource => {
  const [resources, setResources] = React.useState([]);

  React.useEffect(() => {
    (async (resource: string) => {
      const respond = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(respond.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;