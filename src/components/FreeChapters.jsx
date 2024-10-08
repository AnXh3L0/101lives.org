import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-ebook"
      aria-label="Free ebook"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free e-book
            </h2>
            <p className="mt-4 mb-8 text-lg tracking-tight text-blue-200">
              Our free eBook 'Digital Essentials for Animal Welfare Organizations in Spain' offers practical guidance to streamline your operations and build trust with supporters. It's the first eBook in a series. Click the link below to download and get started.
            </p>
            <Button href="https://6ab9af95.sibforms.com/serve/MUIFAIlP1kvus7r1I8mjPo7YLOgYDVH-yRvcze8yGeiAwM27xWbIEP6teg0xwS9hqgFrepBLWamzZCw9jaJP9adx_G3IUmfi8OXIAI2IzYbXfMRFks6fqr3CuyN4NhgNZwRnfpx86AH0huA6N9MOIRjIK9tMFkS3TEUNkyHL3cU_X-Lrb9fS3brTioAkZRW3E5mvGHOmVMmubIGO" target='_blank' rel="noopener noreferrer" color="white">
              Download e-book
              </Button>
          </div>
          {/* <form className="lg:pl-16">
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="EMAIL"
                  name="EMAIL"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get free e-book
              </Button>
            </div>
          </form> */}
        </Container>
      </div>
    </section>
  )
}
