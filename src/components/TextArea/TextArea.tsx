import { Control, Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { TextArea as $TextArea, TextAreaProps as $TextAreaProps } from '@twilio-paste/core/textarea';

export function TextArea<TKeys extends FieldValues>(
  props: Omit<$TextAreaProps, 'onChange' | 'value'> &
    Partial<Pick<$TextAreaProps, 'onChange' | 'value'>> & {
      control: Control;
      name: keyof TKeys;
      // eslint-disable-next-line react/require-default-props
      controllerProps?: Pick<ControllerProps<typeof $TextArea, FieldValues>, 'rules' | 'defaultValue'>;
    },
): React.ReactElement {
  const { control, controllerProps, name, ...rest } = props;
  return (
    <Controller<typeof $TextArea, FieldValues>
      control={control}
      {...controllerProps}
      name={name}
      render={(renderProps) => <$TextArea {...renderProps} {...rest} />}
    />
  );
}

TextArea.displayName = 'TextArea';
