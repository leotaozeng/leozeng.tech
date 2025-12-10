import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="bg-background min-h-screen text-secondary selection:bg-foreground selection:text-background overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Project Not Found
            </h1>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center border border-foreground text-foreground px-6 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
