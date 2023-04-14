import { JSX } from 'preact'

export function TopNav(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div>
      <h1 class="mt-8 text-4xl font-bold">honky tonkin'</h1>
      <nav class="mt-4">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
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
    </div>
  )
}
