import { FC } from 'react';

interface Children_CompProps {
  name: string;
}

const Children_Comp: FC<Children_CompProps> = ({ name }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default Children_Comp;
