const { Theme } = require('@twilio-paste/core/theme');
const React = require('react');

function withPasteThemeProvider(Story) {
  return (
    <Theme.Provider theme="default">
      <Story />
    </Theme.Provider>
  );
}

export const decorators = [withPasteThemeProvider];
