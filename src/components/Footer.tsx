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
            Tailwind CSS
          </h3>
          <p className={`text-sm ${theme.textSecondary}`}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>

        <div>
          <h3 className={`${theme.text} text-lg font-semibold mb-4`}>
            Useful links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className={`hover:${theme.link} transition`}>
                Product
              </a>
            </li>
            <li>
              <a href="#" className={`hover:${theme.link} transition`}>
                Features
              </a>
            </li>
            <li>
              <a href="#" className={`hover:${theme.link} transition`}>
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className={`hover:${theme.link} transition`}>
                Company
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={`${theme.text} text-lg font-semibold mb-4`}>
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li className={theme.textSecondary}>Lomé, Togo</li>
            <li className={theme.textSecondary}>Email : contact@contact.tg</li>
            <li className={theme.textSecondary}>Phone : +228 XX XX XX XX</li>
          </ul>
        </div>
      </div>

      <div
        className={`border-t ${theme.border} mt-10 pt-4 text-center text-sm ${theme.textSecondary}`}
      >
        © 2025 Footer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
