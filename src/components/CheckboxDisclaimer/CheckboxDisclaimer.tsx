import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import {
  CheckboxDisclaimer as $CheckboxDisclaimer,
  CheckboxDisclaimerProps as $CheckboxDisclaimerProps,
} from '@twilio-paste/core/checkbox';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CheckboxDisclaimer<TFormKeys extends FieldValues>(
  props: Omit<$CheckboxDisclaimerProps, 'onChange' | 'value'> &
    Partial<Pick<$CheckboxDisclaimerProps, 'onChange' | 'value'>> & {
      // eslint-disable-next-line react/require-default-props
      registerRef?: React.Ref<HTMLDivElement>;
      name: keyof TFormKeys;
    },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <$CheckboxDisclaimer ref={ref} {...rest} />;
}

CheckboxDisclaimer.displayName = 'CheckboxDisclaimer';
