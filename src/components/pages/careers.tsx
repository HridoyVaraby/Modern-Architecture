import { SectionHeading } from '@/components/common/section-heading';
import { Button } from '@/components/ui/button';

const openings = [
  {
    id: 1,
    title: 'Senior Architect',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are seeking an experienced architect to lead project teams and mentor junior staff.',
  },
  {
    id: 2,
    title: 'Interior Designer',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Looking for a creative interior designer with experience in high-end residential projects.',
  },
  {
    id: 3,
    title: 'Junior Architect',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '0-2 years',
    description: 'Great opportunity for recent graduates to join our dynamic team.',
  },
];

export function Careers() {
  return (
    <div className="pt-24">
      <div className="container">
        <SectionHeading 
          title="Join Our Team" 
          subtitle="Be part of a creative team dedicated to shaping the future of architecture."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {openings.map((job) => (
              <div 
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-[#4F4F4F]">{job.location}</span>
                      <span className="text-sm text-[#4F4F4F]">{job.type}</span>
                      <span className="text-sm text-[#4F4F4F]">{job.experience}</span>
                    </div>
                  </div>
                  <Button variant="default">
                    Apply Now
                  </Button>
                </div>
                <p className="text-[#4F4F4F]">{job.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#F5F5F5] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Don't see a suitable position?</h3>
            <p className="text-[#4F4F4F] mb-6">
              We're always looking for talented individuals to join our team. Send us your portfolio and resume, and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="outline">
              Send Open Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}