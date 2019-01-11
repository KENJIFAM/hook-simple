import * as React from 'react';
import useResources from '../hooks/useResources';
import { Post, Todo } from '../types';

interface Props {
  resource: string;
}

const ResourceList = ({ resource }: Props) => {
  const resources = useResources<Post | Todo>(resource);
  return (
    <ul>
      {resources.map(resource => <li key={resource.id}>{resource.title}</li>)}
    </ul>
  );
};

export default ResourceList;