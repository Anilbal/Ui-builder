import { createFileRoute } from '@tanstack/react-router'
import NavbarSection from '../components/sections/NavbarSection/NavbarSection'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <NavbarSection />
    </div>
  )
}
