import { useTheme } from "./Mode";

function Footer() {
  const theme = useTheme();

  return (
    <footer
      className={`${theme.background} ${theme.text} py-10 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className={`${theme.text} text-lg font-semibold mb-4`}>
            Profzen
          </h3>
          <p className={`text-sm ${theme.textSecondary}`}>
            Nous sommes votre solution complète pour laboratoire
          </p>
        </div>

        <div>
          <h3 className={`${theme.text} text-lg font-semibold mb-4`}>
            Liens utiles
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className={`transition ${theme.isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'}`}>
                Produit
              </a>
            </li>
            <li>
              <a href="#" className={`transition ${theme.isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'}`}>
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="#" className={`transition ${theme.isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'}`}>
                Marché
              </a>
            </li>
            <li>
              <a href="#" className={`transition ${theme.isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'}`}>
                Startup
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={`${theme.text} text-lg font-semibold mb-4`}>
            Contactez-nous
          </h3>
          <ul className="space-y-2 text-sm">
            <li className={theme.textSecondary}>Lomé, Togo</li>
            <li className={theme.textSecondary}>Email : contact@profzen.tg</li>
            <li className={theme.textSecondary}>Téléphone : +228 XX XX XX XX</li>
          </ul>
        </div>
      </div>

      <div
        className={`border-t ${theme.border} mt-10 pt-4 text-center text-sm ${theme.textSecondary}`}
      >
        © 2025-2026 Profzen. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;