// Custom hook for managing quiz state
import { useState, useEffect } from 'react';
import { Question, Quiz, QuizMode, QuizProgress, QuizStatistics } from '../types/quiz';
import {
  calculateQuizStatistics,
  clearQuizProgress,
  getQuestionsByMode,
  getQuizProgress,
  isQuizCompleted,
  saveQuizProgress
} from '../utils/quizUtils';

interface UseQuizProps {
  quiz: Quiz;
  initialMode?: QuizMode;
}

interface UseQuizReturn {
  currentQuestion: Question | null;
  currentQuestionIndex: number;
  selectedOptionId: string | null;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  quizMode: QuizMode;
  questions: Question[];
  progress: QuizProgress | undefined;
  statistics: QuizStatistics;
  isCompleted: boolean;
  
  // Actions
  selectOption: (optionId: string) => void;
  checkAnswer: () => void;
  nextQuestion: () => void;
  changeMode: (mode: QuizMode) => void;
  resetQuiz: () => void;
  clearProgress: () => void;
}

/**
 * Custom hook for managing quiz state
 */
export const useQuiz = ({ quiz, initialMode = QuizMode.SEQUENTIAL }: UseQuizProps): UseQuizReturn => {
  // Load saved progress
  const [progress, setProgress] = useState<QuizProgress | undefined>();
  const [quizMode, setQuizMode] = useState<QuizMode>(initialMode);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Initialize quiz
  useEffect(() => {
    const savedProgress = getQuizProgress(quiz.id);
    setProgress(savedProgress);
    
    // Get questions based on mode
    const modeQuestions = getQuestionsByMode(quiz, quizMode, savedProgress);
    setQuestions(modeQuestions);
    
    // Reset state
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerChecked(false);
    setIsCorrect(null);
  }, [quiz, quizMode]);
  
  // Current question
  const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;
  
  // Calculate statistics
  const statistics = calculateQuizStatistics(quiz, progress);
  
  // Check if quiz is completed
  const isCompleted = isQuizCompleted(quiz, progress);
  
  // Select an option
  const selectOption = (optionId: string) => {
    if (isAnswerChecked) return;
    setSelectedOptionId(optionId);
  };
  
  // Check answer
  const checkAnswer = () => {
    if (!currentQuestion || !selectedOptionId || isAnswerChecked) return;
    
    const isAnswerCorrect = selectedOptionId === currentQuestion.correctOptionId;
    setIsCorrect(isAnswerCorrect);
    setIsAnswerChecked(true);
    
    // Update progress
    const updatedProgress: QuizProgress = progress ? { ...progress } : {
      quizId: quiz.id,
      answeredQuestions: [],
      wrongQuestionIds: [],
    };
    
    // Add answered question
    updatedProgress.answeredQuestions.push({
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect: isAnswerCorrect,
    });
    
    // Update wrong questions list
    if (!isAnswerCorrect) {
      if (!updatedProgress.wrongQuestionIds.includes(currentQuestion.id)) {
        updatedProgress.wrongQuestionIds.push(currentQuestion.id);
      }
    } else {
      // Remove from wrong questions if answered correctly
      updatedProgress.wrongQuestionIds = updatedProgress.wrongQuestionIds.filter(
        id => id !== currentQuestion.id
      );
    }
    
    // Save progress
    saveQuizProgress(updatedProgress);
    setProgress(updatedProgress);
  };
  
  // Move to next question
  const nextQuestion = () => {
    if (!isAnswerChecked) return;
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionId(null);
      setIsAnswerChecked(false);
      setIsCorrect(null);
    } else {
      // Quiz completed
      const updatedProgress = { ...progress! };
      updatedProgress.completedAt = new Date();
      saveQuizProgress(updatedProgress);
      setProgress(updatedProgress);
    }
  };
  
  // Change quiz mode
  const changeMode = (mode: QuizMode) => {
    if (mode === quizMode) return;
    setQuizMode(mode);
  };
  
  // Reset quiz (now also clears progress)
  const resetQuiz = () => {
    clearQuizProgress(quiz.id);
    setProgress(undefined);
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerChecked(false);
    setIsCorrect(null);
    
    // Get questions based on mode
    const modeQuestions = getQuestionsByMode(quiz, QuizMode.SEQUENTIAL, undefined);
    setQuestions(modeQuestions);
    setQuizMode(QuizMode.SEQUENTIAL);
  };
  
  // Clear progress (kept for backward compatibility)
  const clearProgress = resetQuiz;
  
  return {
    currentQuestion,
    currentQuestionIndex,
    selectedOptionId,
    isAnswerChecked,
    isCorrect,
    quizMode,
    questions,
    progress,
    statistics,
    isCompleted,
    
    // Actions
    selectOption,
    checkAnswer,
    nextQuestion,
    changeMode,
    resetQuiz,
    clearProgress,
  };
};