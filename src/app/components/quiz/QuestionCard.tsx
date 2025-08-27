// Question card component
'use client';

import React from 'react';
import { Question } from '@/app/types/quiz';
import { Button } from '../ui/Button';

interface QuestionCardProps {
  question: Question;
  selectedOptionId: string | null;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  onSelectOption: (optionId: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

/**
 * Component for displaying a quiz question and its options
 */
export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  isAnswerChecked,
  isCorrect,
  onSelectOption,
  onCheckAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const { text, options, explanation, correctOptionId } = question;

  // Get explanation text based on selected option
  const getExplanationText = () => {
    if (!isAnswerChecked || !selectedOptionId) return '';
    
    if (isCorrect) {
      return explanation.correct;
    } else {
      return explanation.incorrect[selectedOptionId] || 'Jawapan tidak tepat.';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Question text */}
      <div className="p-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{text}</h3>
      </div>
      
      {/* Options */}
      <div className="p-5">
        <div className="space-y-3">
          {options.map((option) => {
            // Determine option styling based on state
            let optionClasses = 'border rounded-md p-3 flex items-center cursor-pointer';
            
            if (isAnswerChecked) {
              if (option.id === correctOptionId) {
                optionClasses += ' bg-green-50 border-green-500';
              } else if (option.id === selectedOptionId && option.id !== correctOptionId) {
                optionClasses += ' bg-red-50 border-red-500';
              } else {
                optionClasses += ' border-gray-200 opacity-70';
              }
            } else if (option.id === selectedOptionId) {
              optionClasses += ' border-blue-500 bg-blue-50';
            } else {
              optionClasses += ' border-gray-200 hover:border-gray-300 hover:bg-gray-50';
            }
            
            return (
              <div 
                key={option.id}
                className={optionClasses}
                onClick={() => !isAnswerChecked && onSelectOption(option.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="mr-3 flex-shrink-0">
                      {isAnswerChecked ? (
                        option.id === correctOptionId ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : option.id === selectedOptionId ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="h-5 w-5 border border-gray-300 rounded-full"></div>
                        )
                      ) : (
                        <div className={`h-5 w-5 border rounded-full ${option.id === selectedOptionId ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}></div>
                      )}
                    </div>
                    <span className="text-gray-900">{option.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Explanation (shown after checking answer) */}
      {isAnswerChecked && (
        <div className={`p-5 border-t ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              {isCorrect ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">
                {isCorrect ? 'Jawapan Betul!' : 'Jawapan Salah!'}
              </h4>
              <p className="mt-1 text-sm text-gray-700">{getExplanationText()}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Actions */}
      <div className="p-5 bg-gray-50 border-t border-gray-200 flex justify-between">
        <Button
          onClick={onCheckAnswer}
          disabled={!selectedOptionId || isAnswerChecked}
          variant="primary"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          }
        >
          Semak Jawapan
        </Button>
        
        {isAnswerChecked && (
          <Button
            onClick={onNextQuestion}
            variant="secondary"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            {isLastQuestion ? 'Tamat' : 'Soalan Seterusnya'}
          </Button>
        )}
      </div>
    </div>
  );
};