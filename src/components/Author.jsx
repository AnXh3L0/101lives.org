import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/cat-avatar.png'

function MailIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props} stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="3" id="contact-title">
              Contact us
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Have questions or want to report a street cat colony in Spain? Get in touch!
            </p>
            {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
              I’ve been designing icons professionally for over a decade and
              have worked with dozens of the biggest brands to create custom
              sets for their products. I’m an accomplished conference speaker,
              and have been teaching icon design workshops every month for the
              last three years. I’ve worked with designers of all skill levels
              and honed my way of teaching to really click for anyone who has
              the itch to start designing their own icons.
            </p> */}
            <p className="mt-8">
              <Link
                href="mailto:info@101lives.org"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
              >
                <MailIcon className="h-10 w-10 fill-none" />
                <span className="ml-4">Send an email</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
