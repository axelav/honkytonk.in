import { VNode } from 'preact'

export const PageContainer = (props: { children: VNode[] | VNode }) => {
  return <div class="mt-8 mb-16">{props.children}</div>
}
