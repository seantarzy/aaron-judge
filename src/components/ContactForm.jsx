"use client";

export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2 font-body"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2 font-body"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2 font-body"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What's on your mind?"
          className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full text-lg py-3">
        Send Message
      </button>
    </form>
  );
}
