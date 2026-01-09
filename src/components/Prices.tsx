import { CheckIcon } from '@heroicons/react/20/solid'
import { useTheme } from './Mode';

const tiers = [
  {
    name: 'Loisir',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '29€',
    description: "Le plan parfait si vous débutez avec notre produit.",
    features: ['25 produits', 'Jusqu\'\u00e0 10 000 abonnés', 'Analyses avancées', 'Réponse au support en 24h'],
    featured: false,
  },
  {
    name: 'Entreprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '99€',
    description: 'Support et infrastructure dédiés pour votre entreprise.',
    features: [
      'Produits illimités',
      'Abonnés illimités',
      'Analyses avancées',
      'Représentant de support dédié',
      'Automatisations marketing',
      'Intégrations personnalisées',
    ],
    featured: true,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Prices() {
  const theme = useTheme();

  return (
    <div className={`relative isolate ${theme.background} px-6 py-24 sm:py-32 lg:px-8`}>
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className={`mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr ${theme.gradient} opacity-20`}
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className={`text-base/7 font-semibold ${theme.link}`}>Tarifs</h2>
        <p className={`mt-2 text-5xl font-semibold tracking-tight text-balance ${theme.text} sm:text-6xl`}>
          Choisissez le plan qui vous convient
        </p>
      </div>
      <p className={`mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty ${theme.textSecondary} sm:text-xl/8`}>
        Choisissez un plan abordable qui regorge des meilleures fonctionnalités pour engager votre audience, créer la fidélité client et stimuler les ventes.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured 
                ? `relative ${theme.isDark ? 'bg-gray-800' : 'bg-gray-900'} shadow-xl` 
                : `${theme.isDark ? 'bg-white/2.5' : 'bg-white'} shadow-md`,
              tier.featured
                ? 'ring-2 ring-emerald-500'
                : `ring-1 ${theme.isDark ? 'ring-white/10' : 'ring-gray-200'}`,
              tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-indigo-400' : theme.text,
                'text-base/7 font-semibold'
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : theme.text,
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={tier.featured ? 'text-gray-400' : theme.textSecondary}>/mois</span>
            </p>
            <p className={classNames('mt-6 text-base/7', tier.featured ? 'text-gray-300' : theme.textSecondary)}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                tier.featured ? 'text-gray-300' : theme.textSecondary
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? 'text-indigo-400' : theme.link,
                      'h-6 w-5 flex-none'
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-emerald-500 text-white hover:bg-emerald-400 focus-visible:outline-emerald-500'
                  : `${theme.isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-800 text-white hover:bg-gray-700'} focus-visible:outline-gray-800`,
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 transition-colors duration-200',
              )}
            >
              Commencer aujourd'hui
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}