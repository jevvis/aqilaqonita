import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Kontak | Aqila Qonita Rahmadina',
  description: 'Hubungi Aqila Qonita Rahmadina — HR Administration & Recruitment',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center pt-20">
        <div className="w-full">
          <Contact />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Aqila Qonita Rahmadina All rights reserved.
        </p>
      </footer>
    </main>
  )
}
