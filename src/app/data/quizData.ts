// Sample quiz data
import { Quiz, QuizCategory } from "../types/quiz";
import { pengaruhIct } from "./ict";
import { ideologi } from "./ideologi";
import { kesepatuan } from "./kesepatuan";
import { metafizik } from "./metafizik";
import { pembinaanPeradaban } from "./pembinaan-peradaban";
import { persekutuan } from "./persekutuan";
import { tanggungjawabSosial } from "./tanggungjawab";
import { tokohFalsafah } from "./tokoh-falsafah";

/**
 * Quiz categories
 */
export const quizCategories: QuizCategory[] = [
  {
    id: "etika",
    name: "Penghayatan Etika dan Beradaban",
    lecturer: "Mdm Jacqueline Lynn (Kumpulan 3)",
    subcategories: [
      {
        id: "topik-4",
        name: "Topik 4 - Kesepatuan Nasional",
        quizId: "kesepatuan-national",
      },
      {
        id: "topik-5",
        name: "Topik 5 - Pembinaan Peradaban",
        quizId: "pembinaan-peradaban",
      },
      {
        id: "topik-6",
        name: "Topik 6 - Perlembagaan Persekutuan",
        quizId: "persekutuan",
      },
      {
        id: "topik-7",
        name: "Topik 7 - Pengaruh ICT",
        quizId: "pengaruh-ict",
      },
      {
        id: "topik-8",
        name: "Topik 8 - Tanggungjawab Sosial",
        quizId: "tanggungjawab-sosial",
      },
    ],
  },
  {
    id: "falsafah",
    name: "Falsafah",
    lecturer: "NABILLAH BOLHASSAN (KUMPULAN 3)",
    subcategories: [
      {
        id: "falsafah-topik-5",
        name: "Topik 5 - Metafizik",
        quizId: "falsafah-topik-5",
      },
      { id: "falsafah-topik-6", name: "Topik 6", quizId: "falsafah-topik-6" },
      {
        id: "falsafah-topik-7",
        name: "Topik 7 - Ideologi",
        quizId: "falsafah-topik-7",
      },
      {
        id: "tokoh-falsafah",
        name: "Falsafah Tokoh",
        quizId: "tokoh-falsafah",
      },
    ],
  },
];

/**
 * Quiz data
 */
export const quizzes: Quiz[] = [
  metafizik,
  pembinaanPeradaban,
  persekutuan,
  pengaruhIct,
  ideologi,
  tanggungjawabSosial,
  tokohFalsafah,
  kesepatuan,

  // Falsafah - Topik 6
  {
    id: "falsafah-topik-6",
    categoryId: "falsafah",
    subcategoryId: "topik-6",
    title: "Falsafah Topik 6",
    questions: [
      {
        id: "fal6-q1",
        text: "Apakah definisi falsafah menurut perspektif klasik?",
        options: [
          { id: "a", text: "Kajian tentang fenomena alam semula jadi" },
          { id: "b", text: "Cinta kepada kebijaksanaan" },
          { id: "c", text: "Analisis bahasa dan logik" },
          { id: "d", text: "Kajian tentang minda manusia" },
        ],
        correctOptionId: "b",
        explanation: {
          correct:
            'Dari segi etimologi, falsafah berasal dari perkataan Yunani "philosophia" yang bermaksud cinta kepada kebijaksanaan.',
          incorrect: {
            a: "Ini lebih merujuk kepada sains fizikal, bukan falsafah secara keseluruhan.",
            c: "Ini adalah pendekatan falsafah analitik moden, bukan definisi klasik falsafah.",
            d: "Ini lebih merujuk kepada psikologi, walaupun falsafah minda adalah salah satu cabang falsafah.",
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
  return quizzes.find((quiz) => quiz.id === quizId);
};

/**
 * Get all quizzes for a category
 * @param categoryId - The category ID
 * @returns Array of quizzes for the category
 */
export const getQuizzesByCategory = (categoryId: string): Quiz[] => {
  return quizzes.filter((quiz) => quiz.categoryId === categoryId);
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
    (quiz) =>
      quiz.categoryId === categoryId && quiz.subcategoryId === subcategoryId
  );
};

export const getQuizzesIds = (): string[] => {
  return quizzes.map((quiz) => quiz.id);
};
