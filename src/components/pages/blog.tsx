import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

const blogPosts = [
  {
    id: 1,
    title: 'Sustainable Architecture: Building for the Future',
    excerpt: 'Exploring how sustainable design practices are shaping the future of architecture in Bangladesh and beyond.',
    date: 'June 15, 2023',
    author: 'Ahmed Rahman',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'The Evolution of Urban Housing in Dhaka',
    excerpt: 'A look at how residential architecture has evolved in Dhaka over the past decades to address urban challenges.',
    date: 'May 22, 2023',
    author: 'Fatima Khan',
    category: 'Urban Design',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Blending Tradition with Modernity in Commercial Spaces',
    excerpt: 'How contemporary commercial architecture can incorporate traditional Bangladeshi design elements.',
    date: 'April 10, 2023',
    author: 'Rahul Chowdhury',
    category: 'Commercial Design',
    image: 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'The Impact of Climate Change on Architectural Design',
    excerpt: 'Adapting architectural practices to address the challenges posed by climate change in Bangladesh.',
    date: 'March 5, 2023',
    author: 'Nadia Islam',
    category: 'Climate Resilience',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Innovative Materials in Modern Construction',
    excerpt: 'Exploring new materials and technologies that are revolutionizing the construction industry.',
    date: 'February 18, 2023',
    author: 'Kamal Hossain',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Creating Effective Interior Spaces for Productivity',
    excerpt: 'How thoughtful interior design can enhance productivity and wellbeing in workplace environments.',
    date: 'January 30, 2023',
    author: 'Priya Sharma',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const categories = [
  { name: 'All', count: 12 },
  { name: 'Sustainability', count: 4 },
  { name: 'Urban Design', count: 3 },
  { name: 'Commercial Design', count: 2 },
  { name: 'Interior Design', count: 5 },
  { name: 'Innovation', count: 3 },
  { name: 'Climate Resilience', count: 2 },
];

export function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Blog
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Insights, ideas, and inspiration from the world of architecture and design.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex justify-between items-center text-[#4F4F4F] hover:text-black transition-colors duration-300"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mt-12 mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a 
                      key={post.id} 
                      href="#"
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium group-hover:text-black transition-colors duration-300">{post.title}</h4>
                        <p className="text-xs text-[#4F4F4F] mt-1">{post.date}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-12 bg-[#F5F5F5] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-[#4F4F4F] mb-4">Stay updated with our latest insights and projects.</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50"
                      required
                    />
                    <button 
                      type="submit"
                      className="w-full bg-black text-white py-2 rounded-md hover:bg-black/80 transition-colors duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <SectionHeading 
                title="Latest Articles" 
                subtitle="Explore our thoughts on architecture, design, and the built environment."
                align="left"
                className="mb-12"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div 
                    key={post.id}
                    className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-[#4F4F4F] mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-black/70 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[#4F4F4F] text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <CTAButton href="#" variant="secondary" className="text-sm py-1 px-4">
                        Read More
                      </CTAButton>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <CTAButton href="#" variant="primary">
                  Load More Articles
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="bg-black text-white p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Contribute?</h2>
              <p className="text-white/80 text-lg mb-8">
                We welcome guest articles from architects, designers, and industry experts. Share your insights with our community.
              </p>
              <CTAButton href="#" variant="primary" className="mx-auto">
                Submit an Article
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}