// Quiz mode selector component
'use client';

import React from 'react';
import { QuizMode } from '@/app/types/quiz';

interface ModeSelectorProps {
  currentMode: QuizMode;
  onModeChange: (mode: QuizMode) => void;
  showWrongQuestionsMode: boolean;
}

/**
 * Component for selecting quiz mode
 */
export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  onModeChange,
  showWrongQuestionsMode,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Mod Kuiz</h3>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onModeChange(QuizMode.SEQUENTIAL)}
            className={`px-4 py-2 rounded-md flex items-center ${currentMode === QuizMode.SEQUENTIAL
              ? 'bg-blue-100 text-blue-700 border border-blue-300'
              : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Berurutan
          </button>
          
          <button
            onClick={() => onModeChange(QuizMode.RANDOM)}
            className={`px-4 py-2 rounded-md flex items-center ${currentMode === QuizMode.RANDOM
              ? 'bg-blue-100 text-blue-700 border border-blue-300'
              : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Rawak
          </button>
          
          {showWrongQuestionsMode && (
            <button
              onClick={() => onModeChange(QuizMode.WRONG_QUESTIONS)}
              className={`px-4 py-2 rounded-md flex items-center ${currentMode === QuizMode.WRONG_QUESTIONS
                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Soalan Salah
            </button>
          )}
        </div>
      </div>
    </div>
  );
};