"use client"

interface StatItemProps {
  number: string
  text: string
  color: string
  bgColor: string
  delay: number
}

function StatItem({ number, text, color, bgColor }: StatItemProps) {
  return (
    <div
      className={`${bgColor} rounded-lg p-6 text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700`}
    >
      <h3 className={`text-4xl font-bold ${color} mb-2`}>{number}</h3>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-10 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatItem
            number="2+"
            text="Years Experience"
            color="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500"
            bgColor="bg-pink-50 dark:bg-pink-950/30"
            delay={0.1}
          />
          <StatItem
            number="15+"
            text="Projects Completed"
            color="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500"
            bgColor="bg-purple-50 dark:bg-purple-950/30"
            delay={0.2}
          />
          <StatItem
            number="4+"
            text="Platforms Mastered"
            color="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500"
            bgColor="bg-blue-50 dark:bg-blue-950/30"
            delay={0.3}
          />
          <StatItem
            number="5000+"
            text="Audience Reached"
            color="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
            bgColor="bg-cyan-50 dark:bg-cyan-950/30"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
