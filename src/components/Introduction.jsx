import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        Our mission is to enable, support, and empower animal welfare across Spain through innovative digital solutions, collaboration, and community engagement.<br>Our vision is to create harmonious coexistence between communities and animals throughout Spain, focusing on cat welfare, with education, technology, and scalable solutions bridging gaps in animal welfare needs and solutions.
        </p>
        <p className="mt-10">
          <Link
            href="#free-ebook"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get the free e-book straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
