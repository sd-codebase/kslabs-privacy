export default function Home() {
  const examApps = [
    {
      name: "JEEMain-style Mock Test App",
      description: "Complete preparation for JEE Mains with topic-wise tests, mock exams, and detailed analytics",
      icon: "🎯",
      platforms: ["Android", "iOS"],
    },
    {
      name: "JEE Adv-style Mock Test App",
      description: "Advanced level practice for JEE Advanced with challenging problems and solutions",
      icon: "🚀",
      platforms: ["Android", "iOS"],
    },
    {
      name: "NEET-style Mock Test App",
      description: "Comprehensive NEET preparation with biology, physics, and chemistry practice tests",
      icon: "🔬",
      platforms: ["Android", "iOS"],
    },
    {
      name: "UPSC Test Series",
      description: "Prelims and Mains preparation with current affairs and subject-wise tests",
      icon: "📚",
      platforms: ["Android", "iOS"],
    },
    {
      name: "MPSC Test Series",
      description: "Maharashtra PSC exam preparation with state-specific content and mock tests",
      icon: "📋",
      platforms: ["Android", "iOS"],
    },
  ];

  const techApps = [
    {
      name: "Learn Python",
      description: "Master Python programming from basics to advanced with hands-on exercises",
      icon: "🐍",
    },
    {
      name: "Learn JavaScript",
      description: "Complete JavaScript course with modern ES6+ features and real-world projects",
      icon: "💛",
    },
    {
      name: "Learn Java",
      description: "Java programming fundamentals to advanced concepts with practice problems",
      icon: "☕",
    },
    {
      name: "Learn C++",
      description: "C++ programming with DSA, competitive programming, and interview prep",
      icon: "⚡",
    },
  ];

  const stats = [
    { value: "8+", label: "Mobile Apps" },
    { value: "50K+", label: "Active Users" },
    { value: "10K+", label: "Practice Tests" },
    { value: "4.5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">KS</span>
            <span className="text-xl font-semibold">Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#apps" className="text-muted hover:text-foreground transition-colors">Apps</a>
            <a href="#tech" className="text-muted hover:text-foreground transition-colors">Tech Skills</a>
            <a href="#about" className="text-muted hover:text-foreground transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Empowering learners across India
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Success Journey
            <br />
            <span className="text-primary">Starts Here</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            KSLabs builds powerful mobile apps for competitive exam preparation
            and tech skill development. Join thousands of successful aspirants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apps"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors"
            >
              Explore Our Apps
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-secondary hover:bg-secondary/80 font-medium rounded-full transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Apps Section */}
      <section id="apps" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Competitive Exam Preparation
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Comprehensive test series apps designed by experts to help you crack
              India&apos;s toughest competitive exams
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examApps.map((app) => (
              <div
                key={app.name}
                className="group p-6 bg-secondary rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                <p className="text-muted mb-4">{app.description}</p>
                <div className="flex gap-2">
                  {app.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section id="tech" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Skills Development
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Learn programming languages with interactive lessons, coding exercises,
              and real-world projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techApps.map((app) => (
              <div
                key={app.name}
                className="group p-6 bg-background rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{app.name}</h3>
                <p className="text-muted text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About KSLabs
              </h2>
              <p className="text-muted text-lg mb-6">
                KSLabs is dedicated to making quality education accessible to everyone.
                We build mobile applications that help students prepare for competitive
                exams and develop valuable tech skills.
              </p>
              <p className="text-muted text-lg mb-6">
                Our apps are designed with a focus on user experience, comprehensive
                content, and effective learning methodologies. We believe in empowering
                students to achieve their dreams.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Expert-curated content</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Regular updates with latest patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Detailed performance analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Available on Android & iOS</span>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📱</span>
                    <span className="font-medium">Cross-Platform Apps</span>
                  </div>
                  <p className="text-muted text-sm ml-9">
                    Available on both Android and iOS platforms
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📊</span>
                    <span className="font-medium">Smart Analytics</span>
                  </div>
                  <p className="text-muted text-sm ml-9">
                    Track your progress and identify weak areas
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎓</span>
                    <span className="font-medium">Quality Content</span>
                  </div>
                  <p className="text-muted text-sm ml-9">
                    Curated by subject matter experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary border-t border-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">KS</span>
              <span className="text-xl font-semibold">Labs</span>
            </div>
            <div className="flex gap-6 text-muted">
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} KSLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
