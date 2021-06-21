import { FieldValues } from 'react-hook-form';
import {
  CheckboxGroup as $CheckboxGroup,
  CheckboxGroupProps as $CheckboxGroupProps,
} from '@twilio-paste/core/checkbox';

export function CheckboxGroup<TFormKeys extends FieldValues>(
  props: $CheckboxGroupProps & {
    name: keyof TFormKeys;
  },
): React.ReactElement {
  return <$CheckboxGroup {...props} />;
}

CheckboxGroup.displayName = 'CheckboxGroup';
