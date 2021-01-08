import * as React from 'react';
import {
  CheckboxGroup as $CheckboxGroup,
  CheckboxGroupProps as $CheckboxGroupProps,
} from '@twilio-paste/core/checkbox';

export type CheckboxGroupProps = Omit<$CheckboxGroupProps, 'value' | 'onChange'> &
  Partial<Pick<$CheckboxGroupProps, 'onChange'>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CheckboxGroup(
  props: Omit<$CheckboxGroupProps, 'ref' | 'onChange' | 'value'> &
    Partial<Pick<$CheckboxGroupProps, 'onChange' | 'value'>>,
): React.ReactElement {
  const { children } = props;

  return <$CheckboxGroup {...props}>{children}</$CheckboxGroup>;
}

CheckboxGroup.displayName = 'CheckboxGroup';
