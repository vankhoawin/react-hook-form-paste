import { FieldValues } from 'react-hook-form';
import {
  CheckboxDisclaimer as $CheckboxDisclaimer,
  CheckboxDisclaimerProps as $CheckboxDisclaimerProps,
} from '@twilio-paste/core/checkbox';

export function CheckboxDisclaimer<TFormKeys extends FieldValues>(
  props: Omit<$CheckboxDisclaimerProps, 'ref'> & {
    registerRef: React.Ref<HTMLInputElement>;
    name: keyof TFormKeys;
  },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  return <$CheckboxDisclaimer ref={ref} {...rest} />;
}

CheckboxDisclaimer.displayName = 'CheckboxDisclaimer';
