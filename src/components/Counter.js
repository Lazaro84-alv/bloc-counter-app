import { Fragment } from 'react';

import StreamBuilder from '../utils/StreamBuilder';

const Counter = ({ bloc }) => (
  <Fragment>
    <button onClick={() => bloc.increase()}>+</button>
    <button onClick={() => bloc.decrease()}>-</button>
    <label size="large" color="olive">
      Count:
        <StreamBuilder 
            initialData={0}
            stream={bloc.counter}
            builder={snapshot => <p>{snapshot.data}</p>}
        />
    </label>
  </Fragment>
);

export default Counter;