import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  CalendarDays,
  Users,
  Store,
  Trophy,
  Video,
  Mail,
  MessageCircle,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* ───────────────── Header ───────────────── */}
      <header className="text-center py-10">
        <img src="/logo.png" alt="Outlaw Esports Logo" className="mx-auto w-32 mb-4" />
        <h1 className="text-4xl font-bold">Outlaw eSports</h1>
        <p className="text-zinc-400">Compete. Dominate. Repeat.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://x.com/OutlawEspo82893" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Button>
          </a>
          <a
            href="https://www.tiktok.com/@outlaw_esports25?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">TikTok</Button>
          </a>
          <a href="https://discord.gg/WSRNkTEN" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <MessageCircle className="mr-2 h-4 w-4" /> Discord
            </Button>
          </a>
        </div>
      </header>

      {/* ───────────────── Main Content ───────────────── */}
      <main className="px-6 py-10 max-w-5xl mx-auto grid gap-10">
        {/* Roster */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Roster</h2>
          <div className="bg-zinc-800 p-6 rounded-xl text-center">
            <p className="text-zinc-300">
              We’re currently <span className="font-semibold text-white">recruiting players</span> for all titles.
              If you think you have what it takes to become an Outlaw, hit the button below!
            </p>
            <a
              href="https://discord.gg/WSRNkTEN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="mt-4">Apply on Discord</Button>
            </a>
          </div>
        </motion.section>

        {/* Schedule */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <CalendarDays className="mr-2" /> Upcoming Matches
          </h2>
          <ul className="space-y-4">
            <li className="bg-zinc-800 p-4 rounded-xl">TBA – Stay tuned for our first official matches</li>
          </ul>
        </motion.section>

        {/* Achievements */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Star className="mr-2" /> Vision & Goals
          </h2>
          <ul className="space-y-4 text-zinc-300">
            <li>🏆 Build a championship‑calibre Valorant & Rocket League roster</li>
            <li>📈 Foster upcoming talent through coaching & analytics</li>
            <li>🌐 Grow a thriving community for competitive gamers</li>
          </ul>
        </motion.section>

        {/* Merch */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Store className="mr-2" /> Merch
          </h2>
          <div className="bg-zinc-800 p-4 rounded-xl text-center">
            <p className="text-zinc-300 mb-2">Coming soon – Outlaw jerseys & gear!</p>
            <Button variant="outline" className="mt-2">Notify Me</Button>
          </div>
        </motion.section>

        {/* Sponsors */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Trophy className="mr-2" /> Sponsors
          </h2>
          <div className="bg-zinc-800 p-4 rounded-xl">
            <p className="text-zinc-300">We’re actively seeking partners who share our passion for competition and growth.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-12 w-32 bg-zinc-700 rounded-md flex items-center justify-center text-zinc-500 text-sm">
                  <span>YOUR LOGO</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* TikTok Feed */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Video className="mr-2" /> TikTok Feed
          </h2>
          <div className="aspect-w-9 aspect-h-16">
            <iframe
              src="https://www.tiktok.com/embed/@outlaw_esports25"
              width="100%"
              height="600"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Outlaw TikTok Feed"
              className="w-full rounded-xl border-2 border-zinc-800 shadow-lg"
            ></iframe>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Mail className="mr-2" /> Contact
          </h2>
          <p className="text-zinc-300">
            For business inquiries or scrims, email us at
            <a href="mailto:vaggelisampatzo@gmail.com" className="text-purple-400 hover:underline ml-1">
              vaggelisampatzo@gmail.com
            </a>
            .<br />
            Join our community on
            <a
              href="https://discord.gg/WSRNkTEN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline ml-1"
            >
              Discord
            </a>
            .
          </p>
        </motion.section>
      </main>

      <footer className="text-center text-zinc-500 text-sm py-6">
        &copy; {new Date().getFullYear()} Outlaw eSports. All rights reserved.
      </footer>
    </div>
  );
}
