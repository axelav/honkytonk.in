import { Head } from '$fresh/runtime.ts'
import { Header } from '../components/Header.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>https://honkytonk.in/</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Header />

        <h2 class="mt-8 text-2xl font-bold">Lately</h2>

        <ul class="mt-4 space-y-2">
          <li>
            <a href="/notes/lately-2022-06">June 2022</a>
          </li>
          <li>
            <a href="/notes/enduro-toolkit">Enduro Toolkit</a>
          </li>
          <li>
            <a href="/notes/lately-2020-12">December 2020</a>
          </li>
          <li>
            <a href="/notes/spring">Spring</a>
          </li>
          <li>
            <a href="/notes/off-road-racing">Off Road Moto Racing</a>
          </li>
          <li>
            <a href="/notes/wanderings">Wanderings 2018</a>
          </li>
          <li>
            <a href="/notes/guitar-topographies">Guitar Topographies</a>
          </li>
          <li>
            <a href="/notes/trans-america-trail">Trans America Trail</a>
          </li>
        </ul>
      </div>
    </>
  )
}
