import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { format } from 'date-fns';

const articles = [
  {
    id: 1,
    title: 'Emerging Trends in Sustainable Architecture',
    excerpt: 'Discover the latest innovations and approaches in sustainable design for modern buildings.',
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sustainability',
    date: new Date('2025-03-15'),
  },
  {
    id: 2,
    title: 'Why Site Context Matters in Every Project',
    excerpt: 'Understanding the importance of location, climate, and cultural factors in architectural design.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design Process',
    date: new Date('2025-02-28'),
  },
  {
    id: 3,
    title: 'Interior Design Tips for Modern Living',
    excerpt: 'Practical tips and insights for creating comfortable, aesthetic, and functional living spaces.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Interior Design',
    date: new Date('2025-02-10'),
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container">
        <SectionHeading 
          title="From Our Studio" 
          subtitle="We share insights, trends, and design inspiration to keep you informed and inspired."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#000000]/10 text-[#000000] text-xs font-medium px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-[#4F4F4F] text-xs ml-auto">
                    {format(article.date, 'MMM dd, yyyy')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-[#4F4F4F] text-sm mb-4">{article.excerpt}</p>
                <a 
                  href="#" 
                  className="text-[#000000] text-sm font-medium inline-flex items-center hover:underline"
                >
                  Read Article
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton href="#" variant="primary">
            Read All Articles
          </CTAButton>
        </div>
      </div>
    </section>
  );
}