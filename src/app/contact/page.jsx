import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us — AaronJudge.net",
  description:
    "Get in touch with the team behind AaronJudge.net. This is an independent fan site dedicated to Aaron Judge and the New York Yankees.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-gray-950" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wide text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-body">
            Have a question, suggestion, or just want to talk Judge? Drop us a
            line.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-20 -mt-4 space-y-10">
        {/* Contact Form */}
        <div className="glass rounded-2xl p-6 md:p-10">
          <h2 className="section-heading mb-8">Send a Message</h2>

          <ContactForm />
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 text-center space-y-2">
            <svg
              className="w-8 h-8 text-blue-400 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
              Email
            </h3>
            <a
              href="mailto:contact@aaronjudge.net"
              className="text-blue-400 hover:text-blue-300 transition-colors font-body"
            >
              contact@aaronjudge.net
            </a>
          </div>

          <div className="glass rounded-xl p-6 text-center space-y-2">
            <svg
              className="w-8 h-8 text-blue-400 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.73-3.56"
              />
            </svg>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
              Official Yankees
            </h3>
            <a
              href="https://www.mlb.com/yankees"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-body"
            >
              mlb.com/yankees
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-xl p-6 text-center">
          <p className="text-gray-400 font-body text-sm leading-relaxed">
            <strong className="text-gray-300">Disclaimer:</strong> This is an
            independent fan site and is not affiliated with, endorsed by, or
            connected to Aaron Judge, the New York Yankees, or Major League
            Baseball. For official Yankees inquiries, please visit{" "}
            <a
              href="https://www.mlb.com/yankees"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              mlb.com/yankees
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
