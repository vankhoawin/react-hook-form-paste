import {
  CheckboxGroup as $CheckboxGroup,
  CheckboxGroupProps as $CheckboxGroupProps,
} from '@twilio-paste/core/checkbox';

export function CheckboxGroup(props: Omit<$CheckboxGroupProps, 'value' | 'ref'>): React.ReactElement {
  const { children } = props;

  return <$CheckboxGroup {...props}>{children}</$CheckboxGroup>;
}

CheckboxGroup.displayName = 'CheckboxGroup';
