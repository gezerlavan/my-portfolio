import { NavLinks } from './NavLinks'

export function PageFooter() {
  return (
    <footer className="page-footer flex column auto-center">
      <NavLinks />
      <p>Copyright &copy; 2023 Tal Elias. All Rights Reserved.</p>
    </footer>
  )
}
