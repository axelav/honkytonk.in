import { VNode } from 'preact'

export const PageContainer = (props: { children: VNode[] | VNode }) => {
  return <div>{props.children}</div>
}
