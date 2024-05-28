import { VNode } from 'preact'

export const AppHeading = ({ children }: { children: VNode | string }) => (
  <h1>{children}</h1>
)

export const PageHeading = ({ children }: { children: VNode | string }) => (
  <h2>{children}</h2>
)

export const SectionHeading = ({ children }: { children: VNode | string }) => (
  <h3>{children}</h3>
)
