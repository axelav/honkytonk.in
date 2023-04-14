import { AppHeading } from '@/components/typography.tsx'

export const TopNav = () => (
  <header>
    <a href="/">
      <AppHeading>honky tonkin'</AppHeading>
    </a>

    <nav class="mt-4">
      <ul class="grid grid-cols-5 gap-8">
        <li>
          <a href="/places">Places</a>
        </li>
        <li>
          <a href="/notes">Notes</a>
        </li>
        <li>
          <a href="/library">Library</a>
        </li>
        <li>
          <a href="/future">Future</a>
        </li>
        <li>
          <a href="/now">Now</a>
        </li>
      </ul>
    </nav>
  </header>
)
