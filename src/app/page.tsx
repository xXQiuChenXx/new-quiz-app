// Main page component
import { quizCategories } from './data/quizData';
import { Card } from './components/ui/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sistem Kuiz</h1>
          <p className="text-gray-600">Pilih kategori dan topik untuk mula menjawab kuiz</p>
        </header>
        
        <main className="space-y-6">
          {quizCategories.map((category) => (
            <Card 
              key={category.id} 
              title={category.name}
              collapsible
              defaultCollapsed={false}
              className="bg-white"
            >
              <div className="space-y-4">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="border-t pt-4 first:border-t-0 first:pt-0">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-800">{subcategory.name}</h4>
                      <Link 
                        href={`/quiz/${subcategory.quizId}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mr-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Mula Kuiz
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sistem Kuiz. Hak Cipta Terpelihara.</p>
        </footer>
      </div>
    </div>
  );
}
