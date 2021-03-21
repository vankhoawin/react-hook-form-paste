import { Theme } from '@twilio-paste/core/theme';

function withPasteThemeProvider(Story) {
  return (
    <Theme.Provider theme="default">
      <Story />
    </Theme.Provider>
  );
}

export const decorators = [withPasteThemeProvider];
