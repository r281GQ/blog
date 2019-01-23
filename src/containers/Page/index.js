import { getPosts, getUriProps } from './functions'

export default props =>
  props.children({
    posts: getPosts(props),
    paginationProps: getUriProps(props),
  })
