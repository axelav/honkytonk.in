import { VNode } from 'preact'

export const AppHeading = ({ children }: { children: VNode | string }) => (
  <h1 className="mt-8 text-4xl font-medium">{children}</h1>
)

export const PageHeading = ({ children }: { children: VNode | string }) => (
  <h2 className="mt-8 text-3xl font-medium">{children}</h2>
)

export const SectionHeading = ({ children }: { children: VNode | string }) => (
  <h3 className="mt-4 text-2xl font-medium">{children}</h3>
)
