import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <div className="hero-gradient min-h-screen flex flex-col px-4 sm:px-6 md:px-16">
  {/* navbar */}
  <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:px-16">
    <a href="#about" className="text-white text-sm sm:text-base hover:text-purple-300">
      About
    </a>
    <a href="#projects" className="text-white text-sm sm:text-base hover:text-purple-300">
      Projects
    </a>
    <a href="#contact" className="text-white text-sm sm:text-base hover:text-purple-300">
      Contact
    </a>
  </nav>

  <div className="flex-1 flex items-center justify-center">
    <div className="flex flex-row items-center gap-4 sm:gap-8 md:gap-20 max-w-6xl w-full">
      {/* left side */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 flex-1 md:pl-20">
        <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-5xl shine-text">
          Hi, I'm <span>Lama Suleiman</span>
        </h1>
        <p className="text-gray-300 font-bold text-xs sm:text-sm md:text-base">
          Full-Stack Developer | Turning Problems into Practical Solutions
        </p>
        <div className="flex flex-row gap-2 sm:gap-4 mt-2 sm:mt-4">
            <a
            href="/Lama Suleiman_CV.pdf"
            download="Lama Suleiman_CV.pdf"
            className="text-white text-xs sm:text-sm md:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded border border-gray-400 hover:bg-[#27033a] hover:text-white hover:scale-110 transition-all duration-300"
          >
            Download CV
          </a>
            <a
            href="https://www.linkedin.com/in/lama-suleiman-560b841ba"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E6E6E6] text-[#27033A] text-xs sm:text-sm md:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded hover:bg-[#c080c0] hover:text-white hover:border hover:border-gray-400 hover:scale-110 transition-all duration-300 inline-block"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="relative w-28 h-28 sm:w-48 sm:h-48 md:w-96 md:h-96 flex-shrink-0">
        {/* Floating icons - hidden on smallest screens, shown from sm+ */}
        <div className="hidden sm:block absolute -top-6 -left-6 float-icon" style={{ animationDelay: "0s" }}>
          <SiReact className="text-[#61DAFB] text-2xl md:text-4xl drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute -top-4 right-4 float-icon" style={{ animationDelay: "0.6s" }}>
          <SiNextdotjs className="text-white text-2xl md:text-4xl drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute top-1/3 -right-8 float-icon" style={{ animationDelay: "1.2s" }}>
          <SiNodedotjs className="text-[#68A063] text-2xl md:text-4xl drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute -bottom-4 right-8 float-icon" style={{ animationDelay: "1.8s" }}>
          <SiMysql className="text-[#4479A1] text-2xl md:text-4xl drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute -bottom-6 left-8 float-icon" style={{ animationDelay: "2.4s" }}>
          <SiTypescript className="text-[#3178C6] text-2xl md:text-4xl drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute top-1/2 -left-10 float-icon" style={{ animationDelay: "3s" }}>
          <SiExpress className="text-white text-2xl md:text-4xl drop-shadow-lg" />
        </div>

        <div className="relative w-full h-full rounded-full photo-glow">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/pic.jpeg"
              alt="Hero Image"
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll down indicator */}
  <div className="flex justify-center pb-4 sm:pb-8">
    <a href="#about" aria-label="Scroll down">
      <svg className="scroll-arrow w-6 h-6 sm:w-8 sm:h-8 text-white/70 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </div>
</div>

      {/* About section */}

      <section id="about" className="bg-[#FAFAFA] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#6b3f8a]">
              About
            </h2>
            <div className="w-16 h-1 bg-[#6b3f8a] rounded-full mt-3" />
          </div>

          {/* Content: illustration left, text right */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: illustration */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/pic2.svg"
                alt="About illustration"
                width={400}
                height={400}
                className="w-full max-w-sm h-auto"
              />
            </div>

            {/* Right: paragraph */}
            <div className="flex-1">
              <p className="text-[#3a3a3a] text-lg leading-relaxed mb-6">
                I'm Lama Suleiman, a final-year Software Engineering student and
                full-stack developer with a passion for building systems that
                solve real problems. I enjoy working across the entire stack,
                from designing clean, role-based architectures on the backend to
                crafting intuitive interfaces on the frontend.
              </p>
              <p className="text-[#3a3a3a] text-lg leading-relaxed">
                My experience spans inventory management systems, emergency
                alert platforms, and predictive analytics tools using machine
                learning. I'm currently expanding my skill set with Spring Boot
                and SAP systems, and I thrive in fast-paced, collaborative
                environments where clear communication and solid project
                management make the difference between a good idea and a working
                product.
              </p>
              <br />
              <h3 className="font-bold text-[#1a1b2e] mb-2">Tech Stack</h3>
              <span className="text-[#5c5f7a]">
                Node.js, Next.js, React, JavaScript, MySQL, PostgreSQL.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Projects section */}
      <section id="projects" className="bg-[#FAFAFA] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#6b3f8a]">
              Projects
            </h2>
            <div className="w-16 h-1 bg-[#6b3f8a] rounded-full mt-3" />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - SortThrough */}
            <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#6b3f8a] hover:shadow-[0_0_25px_rgba(107,63,138,0.35)]">
              <span className="inline-block text-xs font-semibold text-[#6b3f8a] bg-[#f1e9fe] px-3 py-1 rounded-full mb-3">
                Solo Project
              </span>
              <h3 className="text-xl font-bold text-[#1a1b2e] mb-2">
                SortThrough
              </h3>
              <p className="text-[#5c5f7a] mb-4">
                A centralized inventory, sales, and finance management system
                that replaces disconnected departmental processes with a single
                role-based platform giving each role its own permissions and
                workflows while keeping all data unified.
              </p>
              <p className="text-sm text-[#5c5f7a] mb-4">
                <span className="font-semibold">Tech:</span> Next.js · Node.js ·
                Express · TypeScript · MySQL
              </p>
              <a
                href="https://github.com/lamasu94/sortThrough"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#6b3f8a] font-semibold hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Card 2 - Edusta */}
            <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#6b3f8a] hover:shadow-[0_0_25px_rgba(107,63,138,0.35)]">
              <span className="inline-block text-xs font-semibold text-[#6b3f8a] bg-[#f1e9fe] px-3 py-1 rounded-full mb-3">
                Solo Project
              </span>
              <h3 className="text-xl font-bold text-[#1a1b2e] mb-2">
                Edusta — Student Performance Predictor
              </h3>
              <p className="text-[#5c5f7a] mb-4">
                A predictive analytics system that uses machine learning to
                forecast student pass/fail outcomes, helping institutions flag
                at-risk students early.
              </p>
              <p className="text-sm text-[#5c5f7a] mb-4">
                <span className="font-semibold">Tech:</span> Django · PostgreSQL
                · Machine Learning
              </p>
              <a
                href="https://github.com/lamasu94/Edusta-Bigdata-Projection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#6b3f8a] font-semibold hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Card 3 - Campus Emergency Alert System */}
            <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#6b3f8a] hover:shadow-[0_0_25px_rgba(107,63,138,0.35)]">
              <span className="inline-block text-xs font-semibold text-[#6b3f8a] bg-[#f1e9fe] px-3 py-1 rounded-full mb-3">
                Team Project
              </span>
              <h3 className="text-xl font-bold text-[#1a1b2e] mb-2">
                Campus Emergency Alert System
              </h3>
              <p className="text-[#5c5f7a] mb-4">
                A role-based emergency response platform with three access
                levels admins manage users and announcements, security personnel
                trigger emergency notifications, and students/staff
                automatically receive real-time alerts.
              </p>
              <p className="text-sm text-[#5c5f7a] mb-4">
                <span className="font-semibold">Tech:</span> React · Node.js ·
                Express · MySQL
              </p>
              <a
                href="https://github.com/lamasu94/Emergency-alert-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#6b3f8a] font-semibold hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Card 4 - VigilPay */}
            <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#6b3f8a] hover:shadow-[0_0_25px_rgba(107,63,138,0.35)]">
              <span className="inline-block text-xs font-semibold text-[#6b3f8a] bg-[#f1e9fe] px-3 py-1 rounded-full mb-3">
                Team Project
              </span>
              <h3 className="text-xl font-bold text-[#1a1b2e] mb-2">
                VigilPay — Customer Churn Prediction
              </h3>
              <p className="text-[#5c5f7a] mb-4">
                A predictive system built for banks to identify customers likely
                to churn, using machine learning models to support proactive
                retention strategies.
              </p>
              <p className="text-sm text-[#5c5f7a] mb-4">
                <span className="font-semibold">Tech:</span> Django · PostgreSQL
                · Machine Learning
              </p>
              <a
                href="https://github.com/Afanyu-Emmanuel-Delonie/vigilpay_project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#6b3f8a] font-semibold hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Card 5 - SME Financial Sustainability (In Progress, full width) */}
            <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#6b3f8a] hover:shadow-[0_0_25px_rgba(107,63,138,0.35)] md:col-span-2">
              <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-3">
                In Progress
              </span>
              <h3 className="text-xl font-bold text-[#1a1b2e] mb-2">
                SME Financial Sustainability Prediction System
              </h3>
              <p className="text-[#5c5f7a] mb-4">
                An AI-driven system that analyzes SME transaction data — sales,
                expenses, and payment patterns to predict liquidity stress and
                long-term financial sustainability. It generates risk scores and
                early-warning alerts through a decision-support dashboard,
                helping financial institutions make faster, more informed credit
                and coaching decisions.
              </p>
              <p className="text-sm text-[#5c5f7a]">
                <span className="font-semibold">Tech:</span> AI/Analytics ·
                Predictive Modeling · Dashboard/Decision-support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="bg-[#FAFAFA] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: heading + contact links */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#6b3f8a] mb-2">
                Let's talk more
              </h2>
              <div className="w-16 h-1 bg-[#6b3f8a] rounded-full mb-8" />

              <div className="flex flex-col gap-5">
                {/* LinkedIn */}
             
                <a
                  href="https://www.linkedin.com/in/lama-suleiman-560b841ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group w-fit"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#f1e9fe] group-hover:bg-[#6b3f8a] transition-colors duration-300">
                    <FaLinkedin className="w-5 h-5 text-[#6b3f8a] group-hover:text-white transition-colors duration-300" />
                  </span>
                  <span className="text-[#1a1b2e] font-medium group-hover:text-[#6b3f8a] transition-colors duration-300">
                    Lama suleiman
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/lamasu94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group w-fit"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#f1e9fe] group-hover:bg-[#6b3f8a] transition-colors duration-300">
                    <FaGithub className="w-5 h-5 text-[#6b3f8a] group-hover:text-white transition-colors duration-300" />
                  </span>
                  <span className="text-[#1a1b2e] font-medium group-hover:text-[#6b3f8a] transition-colors duration-300">
                    lamasu94
                  </span>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:lamasuliman42@gmail.com"
                  className="flex items-center gap-4 group w-fit"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#f1e9fe] group-hover:bg-[#6b3f8a] transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#6b3f8a] group-hover:text-white transition-colors duration-300" />
                  </span>
                  <span className="text-[#1a1b2e] font-medium group-hover:text-[#6b3f8a] transition-colors duration-300">
                    lamasuliman42@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Right: illustration */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/pic3.svg"
                alt="Contact illustration"
                width={400}
                height={400}
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
