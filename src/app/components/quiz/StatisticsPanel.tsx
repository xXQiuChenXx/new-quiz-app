// Statistics panel component
'use client';

import React from 'react';
import { QuizStatistics } from '@/app/types/quiz';

interface StatisticsPanelProps {
  statistics: QuizStatistics;
}

/**
 * Component for displaying quiz statistics
 */
export const StatisticsPanel: React.FC<StatisticsPanelProps> = ({ statistics }) => {
  const { totalQuestions, answeredQuestions, correctAnswers, wrongAnswers, completion } = statistics;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Statistik</h3>
      </div>
      
      <div className="p-4">
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Kemajuan</span>
            <span>{Math.round(completion)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${completion}%` }}
            ></div>
          </div>
        </div>
        
        {/* Statistics grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-500">Jumlah Soalan</div>
            <div className="text-xl font-semibold">{totalQuestions}</div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-500">Soalan Dijawab</div>
            <div className="text-xl font-semibold">{answeredQuestions}</div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-md">
            <div className="text-sm text-green-700">Jawapan Betul</div>
            <div className="text-xl font-semibold text-green-700">{correctAnswers}</div>
          </div>
          
          <div className="bg-red-50 p-3 rounded-md">
            <div className="text-sm text-red-700">Jawapan Salah</div>
            <div className="text-xl font-semibold text-red-700">{wrongAnswers}</div>
          </div>
        </div>
      </div>
    </div>
  );
};