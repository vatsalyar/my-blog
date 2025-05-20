export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white px-4 py-12">
      <article className="max-w-3xl mx-auto bg-black/80 rounded-xl shadow-lg p-8 space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-1">My Learning Journey at the University of Windsor</h1>
          <p className="text-gray-400 text-sm">2025-05-20</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">Hello! <span>👋</span></h2>
          <p className="text-lg leading-relaxed">
            I started this blog as a current student at the University of Windsor to share my experiences, difficulties, and all the knowledge I&apos;ve gained during my academic career. I hope you&apos;ll find something helpful or relatable here, regardless of whether you&apos;re a prospective Lancer, a current student, or just inquisitive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">🎓 Academic Insights</h2>
          <p className="text-lg">Studying at the University of Windsor has opened many doors for me, especially in Computer Science. A few highlights include:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li><strong>Collaborative learning:</strong> Working with peers on group projects helped me understand teamwork in real-world settings.</li>
            <li><strong>Hands-on experience:</strong> Courses like COMP-2140 (Language, Grammar and Translators) helped me build a parser, compiler and translator of my own.</li>
            <li><strong>Professors who care:</strong> Many instructors, like Dr. C. I. Ezeife and Dr. Jianguo Lu, go above and beyond to help students grasp core concepts.</li>
          </ul>
          <p className="text-lg">If you&apos;re just starting, I’d recommend using <a href="https://www.w3schools.com/" className="text-indigo-300 underline hover:text-indigo-200">W3Schools</a> and <a href="https://developer.mozilla.org/" className="text-indigo-300 underline hover:text-indigo-200">MDN Web Docs</a> as go-to resources for coding concepts and practice.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">🧰 Tools &amp; Resources That Helped Me</h2>
          <p className="text-lg">Here are some tools and websites I found extremely helpful:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li><strong>Notion</strong> is a lifesaver, it is the best tool for managing the hectic schedule.</li>
            <li><strong>Visual Studio Code</strong>,in my opinion, the best code editor for beginners.</li>
            <li><strong>GitHub</strong> can be used for version control but codespaces is a boon if you code on multiple devices.</li>
            <li><strong>YouTube</strong> for getting through rough patches and difficult concepts.</li>
            <li><strong>FreeCodeCamp &amp; GeeksforGeeks:</strong> for anything you want to learn related to tech.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">💡 Lessons is Key</h2>
          <p className="text-lg">Not everything goes perfectly and it&apos;s okay to not be okay! Here’s what I learned from some of my own mistakes:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li><strong>Just focus on the basics:</strong> I once lost hours debugging something that was clearly explained in the docs. Always read the docs first.</li>
            <li><strong>Avoid delaying important tasks:</strong> This is a dear request to everyone, start planning and stop procrastinating. I lost 10% of my grade because I thought that i can finish the assignment an hour before the deadline.</li>
            <li><strong>Asking for help isn&apos;t a sign of weakness:</strong> Professors and TAs are there to help, but you have to reach out. Don’t keep struggling—be smart and take advice from those who have already done what you’re finding hard.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">📌 A Piece of Advice</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li><strong>Start pursuing your plans:</strong> Even 30 minutes a day on a tough topic adds up. Just keep moving ahead and don&apos;t look back.</li>
            <li><strong>Spend more time with like-minded people:</strong> Talk, spend time or just be close to people who are like you and have similar goals. Because they can be the push in your low times when you don&apos;t feel like doing anything.</li>
            <li><strong>Use campus resources:</strong> The Leddy Library, Writing Support Desk, and Career Services are fantastic and should be utilised for research papers, assignments, or any help you need.</li>
            <li><strong>Balance is crucial:</strong> Life doesn&apos;t always have to be hard and heavy. Take some time off—have fun, go on a trip with friends, play sports. Give some time to your mental well-being as well.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">📚 Blogs That Kept Me Moving</h2>
          <p className="text-lg">While preparing my own blog, I came across a few other student blogs that were really helpful:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li><strong>The Coding Train Blog:</strong> <a href="https://thecodingtrain.com/" className="text-indigo-300 underline hover:text-indigo-200">Inspiring and beginner-friendly.</a></li>
            <li><strong>Dev.to:</strong> <a href="https://dev.to/" className="text-indigo-300 underline hover:text-indigo-200">A great platform where students and professionals alike share their learning journeys.</a></li>
            <li><strong>Ali Abdaal’s Website:</strong> <a href="https://aliabdaal.com/" className="text-indigo-300 underline hover:text-indigo-200">Although not specific to Windsor, his productivity and learning strategies are top-tier.</a></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400">Final Thoughts</h2>
          <p className="text-lg">Creating this blog helped me reflect on how far I’ve come and what’s helped me along the way. I hope it gives you something useful or at least makes you feel a bit more confident in your own journey.</p>
          <p className="text-lg">Feel free to reach out or comment if you’ve got questions or just want to connect!</p>
        </section>

        <footer className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-center text-gray-400 text-sm">
            Thanks for reading! 🙌
          </p>
        </footer>
      </article>
    </main>
  );
}
