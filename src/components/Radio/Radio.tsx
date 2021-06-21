import { FieldValues } from 'react-hook-form';
import { Radio as $Radio, RadioProps as $RadioProps } from '@twilio-paste/core/radio-group';

export function Radio<TFormKeys extends FieldValues>(
  props: $RadioProps & {
    name: keyof TFormKeys;
  },
): React.ReactElement {
  return <$Radio {...props} />;
}

Radio.displayName = 'Radio';
