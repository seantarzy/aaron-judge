import Link from "next/link";

export default function Footer() {
  return (
    <footer className="glass mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3">
              AaronJudge.net
            </h3>
            <p className="text-gray-400 text-sm">
              The ultimate fan hub for Aaron Judge — Yankees Captain, AL home
              run record holder, and MLB superstar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/stats" className="hover:text-white transition-colors">Stats</Link></li>
              <li><Link href="/schedule" className="hover:text-white transition-colors">Game Schedule</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Judge</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-gray-300">
              Disclaimer
            </h4>
            <p className="text-gray-500 text-xs">
              This is an independent fan site and is not affiliated with, endorsed by,
              or connected to Major League Baseball, the New York Yankees, or Aaron Judge.
              All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} AaronJudge.net. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
