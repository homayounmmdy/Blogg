import type { Decorator, Preview } from "@storybook/nextjs";

import "../app/globals.css";

const withDarkBackground: Decorator = (Story) => (
  <div className="min-h-screen bg-gray-950 p-4 sm:p-6">
    <Story />
  </div>
);

const preview: Preview = {
  decorators: [withDarkBackground],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
