// Sample quiz data
import { Quiz, QuizCategory } from '../types/quiz';

/**
 * Quiz categories
 */
export const quizCategories: QuizCategory[] = [
  {
    id: 'matematik',
    name: 'Matematik',
    subcategories: [
      { id: 'topik1', name: 'Topik 1', quizId: 'matematik-topik1' },
      { id: 'topik2', name: 'Topik 2', quizId: 'matematik-topik2' },
    ],
  },
  {
    id: 'falsafah',
    name: 'Falsafah',
    subcategories: [
      { id: 'topik5', name: 'Topik 5', quizId: 'falsafah-topik5' },
      { id: 'topik6', name: 'Topik 6', quizId: 'falsafah-topik6' },
    ],
  },
];

/**
 * Quiz data
 */
export const quizzes: Quiz[] = [
  // Matematik - Topik 1
  {
    id: 'matematik-topik1',
    categoryId: 'matematik',
    subcategoryId: 'topik1',
    title: 'Matematik Topik 1',
    questions: [
      {
        id: 'mat1-q1',
        text: 'Berapakah 2 + 2?',
        options: [
          { id: 'a', text: '3' },
          { id: 'b', text: '4' },
          { id: 'c', text: '5' },
          { id: 'd', text: '6' },
        ],
        correctOptionId: 'b',
        explanation: {
          correct: '2 + 2 = 4 adalah jawapan yang betul.',
          incorrect: {
            'a': '2 + 2 bukan 3. Cuba semak semula pengiraan anda.',
            'c': '2 + 2 bukan 5. Cuba semak semula pengiraan anda.',
            'd': '2 + 2 bukan 6. Cuba semak semula pengiraan anda.',
          },
        },
      },
      {
        id: 'mat1-q2',
        text: 'Berapakah 5 × 3?',
        options: [
          { id: 'a', text: '8' },
          { id: 'b', text: '10' },
          { id: 'c', text: '15' },
          { id: 'd', text: '18' },
        ],
        correctOptionId: 'c',
        explanation: {
          correct: '5 × 3 = 15 adalah jawapan yang betul.',
          incorrect: {
            'a': '5 × 3 bukan 8. Cuba semak semula pengiraan anda.',
            'b': '5 × 3 bukan 10. Cuba semak semula pengiraan anda.',
            'd': '5 × 3 bukan 18. Cuba semak semula pengiraan anda.',
          },
        },
      },
    ],
  },
  
  // Matematik - Topik 2
  {
    id: 'matematik-topik2',
    categoryId: 'matematik',
    subcategoryId: 'topik2',
    title: 'Matematik Topik 2',
    questions: [
      {
        id: 'mat2-q1',
        text: 'Berapakah nilai π (pi) yang dibulatkan kepada 2 tempat perpuluhan?',
        options: [
          { id: 'a', text: '3.12' },
          { id: 'b', text: '3.14' },
          { id: 'c', text: '3.16' },
          { id: 'd', text: '3.18' },
        ],
        correctOptionId: 'b',
        explanation: {
          correct: 'Nilai π yang dibulatkan kepada 2 tempat perpuluhan adalah 3.14.',
          incorrect: {
            'a': 'Nilai π bukan 3.12. Nilai sebenarnya adalah 3.14159...',
            'c': 'Nilai π bukan 3.16. Nilai sebenarnya adalah 3.14159...',
            'd': 'Nilai π bukan 3.18. Nilai sebenarnya adalah 3.14159...',
          },
        },
      },
    ],
  },
  
  // Falsafah - Topik 5
  {
    id: 'falsafah-topik5',
    categoryId: 'falsafah',
    subcategoryId: 'topik5',
    title: 'Falsafah Topik 5',
    questions: [
      {
        id: 'fal5-q1',
        text: 'Apakah maksud "Meta" dalam istilah Metafizik?',
        options: [
          { id: 'a', text: 'Fizikal atau material' },
          { id: 'b', text: 'Kajian tentang alam' },
          { id: 'c', text: 'Melampaui atau melebihi' },
          { id: 'd', text: 'Berkaitan dengan kerohanian' },
        ],
        correctOptionId: 'c',
        explanation: {
          correct: 'Berdasarkan nota, "Meta" bermaksud melampaui, melebihi, di atas, atau tingkatan atas.',
          incorrect: {
            'a': 'Istilah yang merujuk kepada fizikal atau material ialah "Fizik".',
            'b': 'Ini adalah penerangan umum untuk sains fizikal, bukan awalan "Meta".',
            'd': 'Walaupun metafizik membincangkan kerohanian, perkataan "Meta" itu sendiri tidak secara langsung bermaksud kerohanian.',
          },
        },
      },
      {
        id: 'fal5-q2',
        text: 'Menurut nota, Metafizik adalah suatu kajian yang melampaui sempadan atau batasan apa?',
        options: [
          { id: 'a', text: 'Batasan akal manusia' },
          { id: 'b', text: 'Batasan fizikal' },
          { id: 'c', text: 'Batasan logik' },
          { id: 'd', text: 'Batasan teologi' },
        ],
        correctOptionId: 'b',
        explanation: {
          correct: 'Nota secara jelas menyatakan bahawa Metafizik adalah "Suatu yang melampaui sempadan / batasan fizikal".',
          incorrect: {
            'a': 'Walaupun sesetengah konsep metafizik mencabar akal, definisi yang diberikan secara spesifik merujuk kepada batasan fizikal.',
            'c': 'Falsafah secara amnya menggunakan logik, jadi metafizik tidak semestinya melampaui batasan logik.',
            'd': 'Teologi adalah salah satu cabang perbincangan dalam metafizik, bukan batasan yang dilampauinya.',
          },
        },
      },
      {
        id: 'fal5-q3',
        text: 'Jika sains dianggap berada di \'object level\', di manakah kedudukan falsafah sains?',
        options: [
          { id: 'a', text: 'Di \'physical level\'' },
          { id: 'b', text: 'Di \'meta level\'' },
          { id: 'c', text: 'Di \'sub-object level\'' },
          { id: 'd', text: 'Di \'theology level\'' },
        ],
        correctOptionId: 'b',
        explanation: {
          correct: 'Nota menerangkan bahawa falsafah sains berada di \'meta level\', iaitu satu tingkatan yang melampaui sains itu sendiri untuk merenung tentang sifat ilmu sains.',
          incorrect: {
            'a': '\'Physical level\' atau \'object level\' merujuk kepada sains itu sendiri.',
            'c': 'Istilah \'sub-object level\' tidak disebut dan ia membawa maksud yang bertentangan.',
            'd': 'Teologi adalah bidang yang berbeza; falsafah sains secara spesifik mengkaji sains.',
          },
        },
      },
    ],
  },
  
  // Falsafah - Topik 6
  {
    id: 'falsafah-topik6',
    categoryId: 'falsafah',
    subcategoryId: 'topik6',
    title: 'Falsafah Topik 6',
    questions: [
      {
        id: 'fal6-q1',
        text: 'Apakah definisi falsafah menurut perspektif klasik?',
        options: [
          { id: 'a', text: 'Kajian tentang fenomena alam semula jadi' },
          { id: 'b', text: 'Cinta kepada kebijaksanaan' },
          { id: 'c', text: 'Analisis bahasa dan logik' },
          { id: 'd', text: 'Kajian tentang minda manusia' },
        ],
        correctOptionId: 'b',
        explanation: {
          correct: 'Dari segi etimologi, falsafah berasal dari perkataan Yunani "philosophia" yang bermaksud cinta kepada kebijaksanaan.',
          incorrect: {
            'a': 'Ini lebih merujuk kepada sains fizikal, bukan falsafah secara keseluruhan.',
            'c': 'Ini adalah pendekatan falsafah analitik moden, bukan definisi klasik falsafah.',
            'd': 'Ini lebih merujuk kepada psikologi, walaupun falsafah minda adalah salah satu cabang falsafah.',
          },
        },
      },
    ],
  },
];

/**
 * Get quiz by ID
 * @param quizId - The quiz ID
 * @returns The quiz or undefined if not found
 */
export const getQuizById = (quizId: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === quizId);
};

/**
 * Get all quizzes for a category
 * @param categoryId - The category ID
 * @returns Array of quizzes for the category
 */
export const getQuizzesByCategory = (categoryId: string): Quiz[] => {
  return quizzes.filter(quiz => quiz.categoryId === categoryId);
};

/**
 * Get all quizzes for a subcategory
 * @param categoryId - The category ID
 * @param subcategoryId - The subcategory ID
 * @returns Array of quizzes for the subcategory
 */
export const getQuizzesBySubcategory = (
  categoryId: string,
  subcategoryId: string
): Quiz[] => {
  return quizzes.filter(
    quiz => quiz.categoryId === categoryId && quiz.subcategoryId === subcategoryId
  );
};

export const getQuizzesIds = (): string[] => {
  return quizzes.map(quiz => quiz.id);
};