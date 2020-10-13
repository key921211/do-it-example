import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Doit-UI/Flex', module).add('flexDirection 예제', () => (
  <div>
    <h4>flexDirection: 'row'</h4>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>BOX 1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>BOX 2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>BOX 3</div>
    </div>
    <h4>flexDirection: 'column'</h4>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>BOX 1</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>BOX 2</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>BOX 3</div>
    </div>
  </div>
));
