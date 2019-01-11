import * as React from 'react';
import axios from 'axios';

interface Props {
  resource: string;
}

const ResourceList = ({ resource }: Props) => {
  const [resources, setResources] = React.useState([]);

  React.useEffect(() => {
    (async (resource: string) => {
      const respond = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(respond.data);
    })(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;