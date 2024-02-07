import { NavLinks } from './NavLinks'

export function PageFooter() {
  return (
    <footer className="page-footer">
      <NavLinks footer={true} />
      <p>&copy; 2023 Tal Elias. All Rights Reserved.</p>
    </footer>
  )
}
