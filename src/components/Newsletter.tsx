import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useTheme } from './Mode';

export default function Newsletter() {
  const theme = useTheme();

  return (
    <div className={`relative isolate overflow-hidden ${theme.background} py-16 sm:py-24 lg:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className={`text-4xl font-semibold tracking-tight ${theme.text}`}>Abonnez-vous à notre newsletter</h2>
            <p className={`mt-4 text-lg ${theme.textSecondary}`}>
               Restez à la pointe avec des conseils d'experts et les dernières tendances en analytique de données. 
               Rejoignez des milliers d'entreprises qui exploitent les données pour croitre.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Adresse email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Entrez votre email"
                autoComplete="email"
                className={`min-w-0 flex-auto rounded-md ${theme.input.bg} px-3.5 py-2 text-base ${theme.text} outline-1 -outline-offset-1 ${theme.input.border} placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 ${theme.input.focus} sm:text-sm/6`}
              />
              <button
                type="submit"
                className={`flex-none rounded-md ${theme.button.primary} px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500`}
              >
                S'abonner
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className={`rounded-md ${theme.input.bg} p-2 ring-1 ${theme.ring}`}>
                <CalendarDaysIcon aria-hidden="true" className={`size-6 ${theme.text}`} />
              </div>
              <dt className={`mt-4 text-base font-semibold ${theme.text}`}>Articles hebdomadaires</dt>
              <dd className={`mt-2 text-base/7 ${theme.textSecondary}`}>
                Recevez nos articles hebdomadaires sur les stratégies de croissance et les meilleures pratiques du secteur directement dans votre boîte mail.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className={`rounded-md ${theme.input.bg} p-2 ring-1 ${theme.ring}`}>
                <HandRaisedIcon aria-hidden="true" className={`size-6 ${theme.text}`} />
              </div>
              <dt className={`mt-4 text-base font-semibold ${theme.text}`}>Pas de spam</dt>
              <dd className={`mt-2 text-base/7 ${theme.textSecondary}`}>
                Nous respectons votre vie privée. Vos informations restent confidentielles.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className={`aspect-1155/678 w-288.75 bg-gradient-to-tr ${theme.gradient} opacity-30`}
        />
      </div>
    </div>
  )
}