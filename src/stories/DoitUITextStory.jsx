import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../doit-ui/Text';

storiesOf('Doit-UI/Text', module).add('Text 예제', () => (
  <div>
    <Text xlarge>Xlarge</Text>
    <Text xlarge primary>
      Xlarge primary
    </Text>
    <Text xlarge secondary>
      Xlarge secondary
    </Text>
    <Text xlarge bold>
      Xlarge bold
    </Text>
    <Text xlarge light>
      Xlarge light
    </Text>
    <br />
    <Text large>Large</Text>
    <Text large primary>
      Large primary
    </Text>
    <Text large secondary>
      Large secondary
    </Text>
    <Text large bold>
      Large bold
    </Text>
    <Text large light>
      Large light
    </Text>
    <br />
    <Text>default</Text>
    <Text primary>default primary</Text>
    <Text secondary>default secondary</Text>
    <Text bold>default bold</Text>
    <Text light>default light</Text>
    <br />
    <Text small>small</Text>
    <Text small primary>
      small primary
    </Text>
    <Text small secondary>
      small secondary
    </Text>
    <Text small bold>
      small bold
    </Text>
    <Text small light>
      small light
    </Text>
    <br />
    <Text xsmall>xsmall</Text>
    <Text xsmall primary>
      xsmall primary
    </Text>
    <Text xsmall secondary>
      xsmall secondary
    </Text>
    <Text xsmall bold>
      xsmall bold
    </Text>
    <Text xsmall light>
      xsmall light
    </Text>
    <br />
  </div>
));
