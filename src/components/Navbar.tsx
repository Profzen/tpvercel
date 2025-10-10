import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from './Mode'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const theme = useTheme()
  const { isDark, toggleTheme } = theme

  return (
    <div className={theme.background}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={isDark 
                  ? "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  : "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                }
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden gap-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${theme.textButton}`}
            >
              <span className="sr-only">Toggle theme</span>
              {isDark ? (
                <SunIcon aria-hidden="true" className="size-6" />
              ) : (
                <MoonIcon aria-hidden="true" className="size-6" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${theme.textButton}`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={`text-sm/6 font-semibold ${theme.text}`}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 lg:items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center justify-center rounded-md p-2 ${theme.textButton} ${theme.hover}`}
            >
              <span className="sr-only">Toggle theme</span>
              {isDark ? (
                <SunIcon aria-hidden="true" className="size-5" />
              ) : (
                <MoonIcon aria-hidden="true" className="size-5" />
              )}
            </button>
            <a href="#" className={`text-sm/6 font-semibold ${theme.text}`}>
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto ${theme.mobileMenu} p-6 sm:max-w-sm sm:ring-1 ${theme.ring}`}>
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={isDark 
                    ? "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    : "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  }
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`-m-2.5 rounded-md p-2.5 ${theme.textButton}`}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className={`-my-6 ${isDark ? 'divide-white/10' : 'divide-gray-900/10'} divide-y`}>
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${theme.text} ${theme.hover}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold ${theme.text} ${theme.hover}`}
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className={`relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr ${theme.gradient} opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75`}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className={`relative rounded-full px-3 py-1 text-sm/6 ${theme.textSecondary} ring-1 ${theme.ring}`}>
              Announcing our next round of funding.{' '}
              <a href="#" className={`font-semibold ${theme.link}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className={`text-5xl font-semibold tracking-tight text-balance ${theme.text} sm:text-7xl`}>
              Data to enrich your online business
            </h1>
            <p className={`mt-8 text-lg font-medium text-pretty ${theme.textSecondary} sm:text-xl/8`}>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className={`rounded-md ${theme.button.primary} px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
              >
                Get started
              </a>
              <a href="#" className={`text-sm/6 font-semibold ${theme.text}`}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className={`relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr ${theme.gradient} opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75`}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar