import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Residential', value: 40 },
  { name: 'Commercial', value: 30 },
  { name: 'Institutional', value: 20 },
  { name: 'Urban Planning', value: 10 },
];

const COLORS = ['#000000', '#4F4F4F', '#212121', '#BDBDBD'];

const stats = [
  { label: 'Projects Completed', value: '120+' },
  { label: 'Happy Clients', value: '85+' },
  { label: 'Years of Experience', value: '25+' },
  { label: 'Design Awards', value: '15+' },
];

export function Stats() {
  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[#F5F5F5] p-6 rounded-md text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#000000]">{stat.value}</h3>
                <p className="text-[#4F4F4F] text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={1}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-1" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                  />
                  <span className="text-xs text-[#4F4F4F]">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}