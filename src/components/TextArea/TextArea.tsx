import { UseControllerProps, useController, FieldValues } from 'react-hook-form';
import { TextArea as $TextArea, TextAreaProps as $TextAreaProps } from '@twilio-paste/core/textarea';

export function TextArea<TFieldValues extends FieldValues>(
  props: Omit<$TextAreaProps, 'name' | 'onChange'> &
    Pick<Partial<$TextAreaProps>, 'onChange'> & {
      controllerProps: UseControllerProps<TFieldValues>;
    },
): React.ReactElement {
  const { controllerProps, ...rest } = props;
  const { field: textAreaProps } = useController(controllerProps);

  return (
    // @ts-ignore
    <$TextArea
      {...textAreaProps}
      {...rest}
      onChange={(checked) => {
        textAreaProps.onChange(checked);
        rest.onChange?.(checked);
      }}
      onBlur={(event) => {
        textAreaProps.onBlur();
        rest.onBlur?.(event);
      }}
    />
  );
}

TextArea.displayName = 'TextArea';
