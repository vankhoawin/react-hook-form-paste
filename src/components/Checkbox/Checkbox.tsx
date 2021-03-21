import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { Checkbox as $Checkbox, CheckboxProps as $CheckboxProps } from '@twilio-paste/core/checkbox';

export function Checkbox<TFormKeys extends FieldValues>(
  props: Omit<$CheckboxProps, 'ref'> & {
    registerRef: React.Ref<HTMLInputElement>;
    // eslint-disable-next-line react/require-default-props
    name?: keyof TFormKeys;
  },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  return <$Checkbox ref={ref} {...rest} />;
}

Checkbox.displayName = 'Checkbox';
