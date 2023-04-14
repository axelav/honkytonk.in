import React from 'react'
import {
  Heading,
  Subheading,
  Title,
  Subtitle,
  H5,
  H6,
  Text,
  Link,
  Image,
  Blockquote,
  Pre,
  Code,
  UnorderedList,
  OrderedList,
  Item,
  Table,
} from './components'

const createComponent = (Component, defaultProps) => {
  const C = props => React.createElement(Component, props)
  C.defaultProps = defaultProps
  return C
}

const createHeading = Component => props => {
  if (!props.id) {
    return React.createElement(Component, props)
  }

  return React.createElement(
    Component,
    props,
    React.createElement(
      Link,
      {
        href: '#' + props.id,
      },
      props.children
    )
  )
}

const createScope = (props = {}) => {
  const commonComponents = {
    h1: createHeading(Heading),
    h2: createHeading(Subheading),
    h3: createHeading(Title),
    h4: createHeading(Subtitle),
    h5: createHeading(H5),
    h6: createHeading(H6),
    p: Text,
    a: Link,
    img: Image,
    blockquote: Blockquote,
    pre: Pre,
    code: Code,
    inlineCode: Code,
    ul: UnorderedList,
    ol: OrderedList,
    li: Item,
    table: Table,
  }

  const tags = Object.keys(commonComponents)

  return tags.reduce((scope, tag) => {
    const Component = commonComponents[tag]

    scope[tag] = createComponent(Component, props)
    return scope
  }, {})
}

export {
  createScope as default,
  Heading,
  Subheading,
  Title,
  Subtitle,
  H5,
  H6,
  Text,
  Link,
  Image,
  Blockquote,
  Pre,
  Code,
  UnorderedList,
  OrderedList,
  Item,
  Table,
}
