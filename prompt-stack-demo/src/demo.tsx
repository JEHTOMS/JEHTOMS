import React from 'react';
import InteractivePromptStack from './interactive-prompt-stack';

// Demo file showing how to use the Interactive Prompt Stack component
export default function PromptStackDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Interactive Prompt Stack Demo
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Prompt Stack Component
          </h2>
          <p className="text-gray-600 mb-6">
            This interactive prompt stack allows users to expand/collapse prompts, 
            take actions, and manage multiple notifications in a stacked interface.
          </p>
          
          {/* Interactive Prompt Stack Component */}
          <InteractivePromptStack />
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Click on collapsed prompts to expand them</li>
            <li>Click the X button to collapse expanded prompts</li>
            <li>Use Primary/Secondary action buttons in expanded state</li>
            <li>Stacked z-index for proper layering</li>
            <li>Hover effects and smooth transitions</li>
            <li>Status indicators with different types (Error, Success, etc.)</li>
            <li>Responsive design with proper spacing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}