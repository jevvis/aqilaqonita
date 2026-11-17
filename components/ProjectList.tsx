'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Administrasi SDM untuk 100+ Orang", en: "HR Administration for 100+ People" },
    description: { id: "Kehadiran, catatan kepegawaian, dan dokumentasi penggajian untuk 10 karyawan, 3 magang, 90+ kru acara, dan 5+ kru trainee.", en: "Attendance, personnel records, and payroll-related documentation for 10 employees, 3 interns, 90+ event crew, and 5+ trainee crew." },
    framework: "ABATA WEDDING ORGANIZER 2026",
    techStack: ["HR Admin", "Kehadiran"],
  },
  {
    number: '02',
    title: { id: "Alokasi Kru untuk 40+ Acara", en: "Crew Allocation for 40+ Events" },
    description: { id: "Menugaskan 7–10 anggota kru per acara untuk memenuhi kebutuhan staf dan kesiapan operasional.", en: "Assigning 7–10 crew members per event to meet staffing needs and operational readiness." },
    framework: "ABATA WEDDING ORGANIZER 2026",
    techStack: ["Staffing", "Kru"],
  },
  {
    number: '03',
    title: { id: "Perencanaan Staf di Excel untuk 70+ Acara", en: "Excel Staff Planning for 70+ Events" },
    description: { id: "Lembar kerja penugasan kru dan ketersediaan PIC, dengan konfirmasi dan tindak lanjut sekitar dua bulan sebelumnya.", en: "Spreadsheets of crew assignments and PIC availability, with confirmations and follow-ups about two months ahead." },
    framework: "ABATA WEDDING ORGANIZER 2026",
    techStack: ["Excel", "Workforce Planning"],
  },
  {
    number: '04',
    title: { id: "Kepatuhan Kehadiran Kru 90%", en: "90% Crew Attendance Compliance" },
    description: { id: "Memantau dan mengonsolidasikan catatan kehadiran kru acara untuk mendukung akuntabilitas.", en: "Monitoring and consolidating event crew attendance records to support accountability." },
    framework: "ABATA WEDDING ORGANIZER 2026",
    techStack: ["Attendance", "Akuntabilitas"],
  },
  {
    number: '05',
    title: { id: "50+ Dokumen Mutasi dan Promosi PNS", en: "50+ Civil Servant Transfer and Promotion Documents" },
    description: { id: "Memproses dokumen administrasi kepegawaian dan surat keputusan pengangkatan secara akurat.", en: "Processing personnel administration documents and appointment decrees accurately." },
    framework: "BKPSDM KABUPATEN KUDUS 2025",
    techStack: ["Personnel", "SK Pengangkatan"],
  },
  {
    number: '06',
    title: { id: "Otomasi Pengarsipan di Excel", en: "Excel Filing Automation" },
    description: { id: "Mengotomasi sistem pengarsipan dokumen dan menghemat waktu tim hingga 6 jam per minggu.", en: "Automating the document filing system and saving the team up to 6 hours per week." },
    framework: "BKPSDM KABUPATEN KUDUS 2025",
    techStack: ["Excel", "Efisiensi"],
  },
  {
    number: '07',
    title: { id: "100+ Surat Menyurat dan Legalisasi Dokumen", en: "100+ Correspondence Items and Document Legalization" },
    description: { id: "Memproses surat-menyurat administrasi dan mengoordinasikan legalisasi dengan SETDA dan sekretaris lintas bagian.", en: "Processing administrative correspondence and coordinating legalization with SETDA and cross-departmental secretaries." },
    framework: "BKPSDM KABUPATEN KUDUS 2025",
    techStack: ["Korespondensi", "Legalisasi"],
  },
  {
    number: '08',
    title: { id: "Rekrutmen Berbasis Kompetensi MC FBE UII", en: "Competency-Based Recruitment, MC FBE UII" },
    description: { id: "60+ pelamar dari target 40; 36 staf terpilih dari 50+ kandidat lewat BEI, metode STAR, dan SJT.", en: "60+ applicants against a target of 40; 36 staff selected from 50+ candidates via BEI, the STAR method, and SJT." },
    framework: "MANAGEMENT COMMUNITY FBE UII 2024 — 2025",
    techStack: ["BEI", "STAR & SJT"],
  },
  {
    number: '09',
    title: { id: "Struktur Kepanitiaan MANIFEST 30+ Anggota", en: "MANIFEST Committee Structure for 30+ Members" },
    description: { id: "Menyusun struktur dan pembagian peran 5 divisi serta memimpin 3 rapat koordinasi.", en: "Establishing the structure and role allocation of 5 divisions and leading 3 coordination meetings." },
    framework: "HMJM UII 2024",
    techStack: ["Organisasi", "Koordinasi"],
  },
  {
    number: '10',
    title: { id: "SOP dan Buku Panduan SDM BUMDes Argaloka", en: "SOP and HRM Guideline Book, BUMDes Argaloka" },
    description: { id: "Buku panduan operasional dan SDM untuk 4 unit usaha, diadopsi seluruh pengurus BUMDes.", en: "An operational and HRM guideline book for 4 business units, adopted by all BUMDes management members." },
    framework: "KKN UII BATCH 73 2025",
    techStack: ["SOP", "Guideline Book"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'HR & RECRUITMENT PORTFOLIO' : 'PORTOFOLIO HR & REKRUTMEN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'HR Administration, Recruitment & Organisational Work' : 'Administrasi SDM, Rekrutmen & Kegiatan Organisasi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of HR administration, an HR internship, recruitment and selection, and student organisation work.'
              : 'Rekam jejak administrasi SDM, magang SDM, rekrutmen dan seleksi, serta kegiatan organisasi mahasiswa.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
