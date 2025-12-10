interface SideEmailProps {
  email?: string
}

export default function SideEmail({ email = 'leotaozeng@gmail.com' }: SideEmailProps) {
  return (
    <div className="hidden md:block fixed bottom-0 right-10 z-10 text-secondary">
      <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-secondary after:mt-6">
        <a
          href={`mailto:${email}`}
          className="[writing-mode:vertical-rl] hover:text-foreground hover:-translate-y-1 transition-all duration-300 font-mono text-xs tracking-widest"
        >
          {email}
        </a>
      </div>
    </div>
  )
}

