import { AppHeading } from '@/components/typography.tsx'

export const TopNav = () => {
  const rootPath = globalThis.location?.pathname.split('/')[1]

  return (
    <header>
      <a href="/">
        <AppHeading>honky tonkin'</AppHeading>
      </a>

      <nav>
        <ul>
          <li>
            <a href="/places" aria-current={rootPath === 'places'}>
              Places
            </a>
          </li>
          <li>
            <a href="/notes" aria-current={rootPath === 'notes'}>
              Notes
            </a>
          </li>
          {/* <li>
          <a href="/library">Library</a>
        </li> */}
          <li>
            <a href="/future" aria-current={rootPath === 'future'}>
              Future
            </a>
          </li>
          <li>
            <a href="/now" aria-current={rootPath === 'now'}>
              Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
