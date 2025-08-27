import { getQuizzesIds } from "@/app/data/quizData";
import QuizContent from "@/app/components/quiz/QuizContent";

interface QuizPageProps {
  params: Promise<{
    quizId: string;
  }>;
}

export function generateStaticParams() {
  return getQuizzesIds().map((id) => {
    return { quizId: id };
  });
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { quizId } = await params;
  return <QuizContent quizId={quizId} />;
}
