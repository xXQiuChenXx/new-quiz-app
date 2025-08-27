// Types for quiz application

/**
 * Quiz category type
 */
export interface QuizCategory {
  id: string;
  name: string;
  lecturer: string;
  subcategories: QuizSubcategory[];
}

/**
 * Quiz subcategory type
 */
export interface QuizSubcategory {
  id: string;
  name: string;
  quizId: string;
}

/**
 * Quiz type
 */
export interface Quiz {
  id: string;
  categoryId: string;
  subcategoryId: string;
  title: string;
  questions: Question[];
}

/**
 * Question type
 */
export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation: {
    correct: string;
    incorrect: Record<string, string>; // Map of optionId to explanation
  };
}

/**
 * Option type
 */
export interface Option {
  id: string;
  text: string;
}

/**
 * Quiz mode type
 */
export enum QuizMode {
  SEQUENTIAL = 'sequential',
  RANDOM = 'random',
  WRONG_QUESTIONS = 'wrong_questions',
}

/**
 * Quiz progress type
 */
export interface QuizProgress {
  quizId: string;
  answeredQuestions: {
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }[];
  wrongQuestionIds: string[];
  completedAt?: Date;
}

/**
 * Quiz statistics type
 */
export interface QuizStatistics {
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  completion: number; // Percentage of completion
}