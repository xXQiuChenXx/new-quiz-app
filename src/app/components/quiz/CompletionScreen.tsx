// Quiz completion screen component
'use client';

import React from 'react';
import { QuizStatistics, QuizMode } from '@/app/types/quiz';
import { Button } from '../ui/Button';

interface CompletionScreenProps {
  statistics: QuizStatistics;
  hasWrongAnswers: boolean;
  onRestart: () => void;
  onTryWrongQuestions: () => void;
  onBackToMenu: () => void;
  onClearProgress: () => void;
}

/**
 * Component for displaying quiz completion screen
 */
export const CompletionScreen: React.FC<CompletionScreenProps> = ({
  statistics,
  hasWrongAnswers,
  onRestart,
  onTryWrongQuestions,
  onBackToMenu,
  onClearProgress,
}) => {
  const { totalQuestions, correctAnswers, wrongAnswers } = statistics;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden text-center p-6">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tahniah!</h2>
        <p className="text-gray-600">Anda telah menjawab semua soalan.</p>
      </div>
      
      {/* Score display */}
      <div className="mb-8">
        <div className="inline-block rounded-full bg-blue-100 text-blue-800 px-4 py-1 text-sm font-medium mb-2">
          Skor Anda
        </div>
        <div className="text-4xl font-bold text-gray-900">{score}%</div>
        <div className="mt-2 text-gray-600">
          {correctAnswers} betul dari {totalQuestions} soalan
        </div>
      </div>
      
      {/* Statistics summary */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 p-3 rounded-md">
          <div className="text-sm text-green-700">Jawapan Betul</div>
          <div className="text-xl font-semibold text-green-700">{correctAnswers}</div>
        </div>
        
        <div className="bg-red-50 p-3 rounded-md">
          <div className="text-sm text-red-700">Jawapan Salah</div>
          <div className="text-xl font-semibold text-red-700">{wrongAnswers}</div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="space-y-3">
        {hasWrongAnswers && (
          <Button 
            onClick={onTryWrongQuestions} 
            variant="primary" 
            fullWidth 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            }
          >
            Cuba Semula Soalan Salah
          </Button>
        )}
        
        <Button 
          onClick={onRestart} 
          variant="secondary" 
          fullWidth 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          }
        >
          Mula Semula Kuiz
        </Button>
        
        <Button 
          onClick={onClearProgress} 
          variant="outline" 
          fullWidth 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          }
        >
          Padam Kemajuan
        </Button>
        
        <Button 
          onClick={onBackToMenu} 
          variant="outline" 
          fullWidth 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          }
        >
          Kembali ke Menu Utama
        </Button>
      </div>
    </div>
  );
};