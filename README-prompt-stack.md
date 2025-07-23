# Interactive Prompt Stack Component

A React component that creates an interactive, stacked prompt interface based on the provided design. This component allows users to manage multiple notifications or prompts in a visually appealing, stackable format.

## Features

### ✨ Interactive Elements
- **Expandable/Collapsible**: Click on collapsed prompts to expand them, click the X button to collapse
- **Action Buttons**: Primary and Secondary action buttons in expanded state
- **Stacked Layout**: Multiple prompts stack with proper z-indexing and shadows
- **Smooth Transitions**: Hover effects and smooth animations

### 🎨 Visual Design
- **Status Indicators**: Different status types (Error, Success, Alert, Info, Pending) with appropriate colors
- **Responsive Layout**: Adapts to different screen sizes
- **Modern UI**: Clean design with rounded corners, shadows, and proper spacing
- **Color-coded States**: Red for errors, green for success, yellow for alerts/pending

### 🔧 Customization
- **Configurable Status Types**: Support for multiple status indicator types
- **Flexible Content**: Customizable titles and descriptions
- **Action Handling**: Configurable primary and secondary action callbacks

## Usage

### Basic Implementation

```tsx
import InteractivePromptStack from './interactive-prompt-stack';

function App() {
  return (
    <div className="App">
      <InteractivePromptStack />
    </div>
  );
}
```

### Custom Implementation

```tsx
import React, { useState } from 'react';
import InteractivePromptStack from './interactive-prompt-stack';

// You can extend the component to accept custom prompts
function CustomPromptStack() {
  const [customPrompts, setCustomPrompts] = useState([
    {
      id: 'custom-1',
      title: 'Custom Notification',
      description: 'This is a custom notification message',
      status: 'Alert',
      isExpanded: false
    }
  ]);

  return <InteractivePromptStack />;
}
```

## Component Structure

### Main Components

1. **InteractivePromptStack**: Main container component
2. **PromptItem**: Individual prompt component (handles both expanded and collapsed states)
3. **Status**: Status indicator component with multiple size and type options
4. **ChevronDown**: Expandable indicator with rotation animation

### Data Interface

```typescript
interface PromptData {
  id: string;
  title: string;
  description: string;
  status: "Success" | "Error" | "Alert" | "Info" | "Pending";
  isExpanded: boolean;
}
```

## Interaction Patterns

### Expanding/Collapsing
- **Collapsed State**: Shows title, status indicator, and chevron down
- **Expanded State**: Shows full content with description, action buttons, and close button
- **Single Expansion**: Only one prompt can be expanded at a time

### Actions
- **Primary Action**: Typically resolves/removes the prompt
- **Secondary Action**: Alternative action (e.g., "Later", "Cancel")
- **Close Action**: Collapses the expanded prompt

### Stacking Behavior
- **Z-Index Management**: Proper layering with newer prompts on top
- **Visual Hierarchy**: Shadows and spacing create depth perception
- **Overlap Prevention**: Careful margin management prevents visual conflicts

## Styling

The component uses Tailwind CSS classes with a red color theme (`#cb272f`). Key style features:

- **Error State**: Red background (`#cb272f`) with light red container (`#fbeaea`)
- **Interactive Elements**: Hover states with color transitions
- **Typography**: Inter font family with proper font weights
- **Shadows**: Subtle shadows for depth and separation

## Dependencies

- React 18+
- TypeScript (for type safety)
- Tailwind CSS (for styling)
- SVG icons (provided via `svg-vxsfb.ts`)

## File Structure

```
├── interactive-prompt-stack.tsx   # Main component
├── svg-vxsfb.ts                  # SVG icon exports
├── demo.tsx                      # Demo/example usage
└── README-prompt-stack.md        # This documentation
```

## Customization Options

### Status Types
The component supports five status types:
- `Success`: Green checkmark
- `Error`: Red X icon
- `Alert`: Yellow exclamation
- `Info`: Gray info icon
- `Pending`: Yellow clock icon

### Size Variants
Status indicators support multiple sizes:
- 16px, 24px, 32px, 40px, 48px, 56px, 72px

### Color Themes
While currently using a red theme, the component can be easily customized by modifying the Tailwind classes for different color schemes.

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- React 16.8+ (hooks support required)
- ES6+ JavaScript features

## Performance Considerations

- Efficient state management with React hooks
- Minimal re-renders through proper state isolation
- Optimized CSS with Tailwind utility classes
- SVG icons for crisp scaling at any size

## Accessibility

- Keyboard navigation support through native button elements
- Semantic HTML structure
- Proper ARIA attributes for screen readers
- High contrast color schemes for visibility

This component provides a polished, production-ready solution for managing stacked notifications and prompts in modern web applications.