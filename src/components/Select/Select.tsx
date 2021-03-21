import { FieldValues } from 'react-hook-form';
import { Select as $Select, SelectProps as $SelectProps } from '@twilio-paste/core/select';

export type SelectProps = Omit<$SelectProps, 'value' | 'onChange'> & Partial<Pick<$SelectProps, 'onChange'>>;

export function Select<TFormKeys extends FieldValues>(
  props: Omit<$SelectProps, 'ref' | 'onChange' | 'value'> &
    Partial<Pick<$SelectProps, 'onChange' | 'value'>> & {
      registerRef: React.Ref<HTMLSelectElement>;
      name: keyof TFormKeys;
    },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  // @ts-ignore
  return <$Select ref={ref} {...rest} />;
}

Select.displayName = 'Select';
