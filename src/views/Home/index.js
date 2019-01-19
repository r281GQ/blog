import React from 'react'
import { Box, Flex } from 'rebass'

import Layout from './../../components/Layout'

const mainLinks = [
  { name: 'home', link: '/home' },
  { name: 'articles', link: '/articles' },
  { name: 'videos', link: '/videos' },
  { name: 'books', link: '/books' },
  { name: 'about', link: '/about' },
]

export default () => (
  <Layout>
    <Flex flexDirection="column">
      <Box py={4}>
        <Flex>
          {mainLinks.map(item => (
            <Box key={item.name} mr={3}>
              {item.name}
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex>
        <Box css={{ maxWidth: 250 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultrices lorem ac nunc porta interdum. Nam purus erat, porttitor sit
          amet accumsan at, blandit vel mauris. Praesent nec nisi mauris.
          Suspendisse nulla dui, sagittis eget venenatis id, elementum nec ante.
          Integer dignissim sem ipsum, id vehicula justo cursus et. Nulla
          porttitor massa vitae felis iaculis, at auctor urna accumsan. Nunc
          semper vulputate arcu a dignissim. In in velit maximus, vulputate
          libero in, lobortis leo. Quisque vel leo eget elit ornare aliquam.
          Praesent sed lectus vitae ante blandit molestie. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent aliquam commodo consequat. Cras tempor convallis
          dolor. Praesent egestas volutpat est, id lacinia diam elementum
          venenatis. Curabitur pellentesque justo eget nibh posuere, eget
          iaculis eros mattis. Curabitur commodo egestas felis sed ornare. Proin
          sollicitudin vehicula accumsan. Maecenas tempor porta elit ac pretium.
          Vivamus in arcu sed felis egestas egestas. Nulla varius lacus et lacus
          pretium, a faucibus odio fermentum. Nam convallis, diam eu commodo
          porttitor, sapien augue dignissim neque, et vehicula velit lorem vel
          nisi. Mauris rutrum, dui sed aliquam molestie, massa nulla tincidunt
          urna, nec faucibus lacus mi vel dui. Phasellus gravida condimentum
          orci, et vestibulum massa tristique quis. Nullam rutrum, ex eget
          varius dapibus, est nibh ultrices ipsum, a ultrices quam ex efficitur
          tortor. In at urna tempor, condimentum dolor eget, maximus tellus.
          Donec tempus tincidunt purus viverra rhoncus. Quisque pulvinar a ex
          sed suscipit. Donec maximus mauris vel turpis aliquet mattis. Nullam
          sapien elit, lobortis at dapibus ut, fringilla eu nulla. Vestibulum
          feugiat erat at finibus efficitur. Nullam venenatis laoreet
          consectetur. Proin elit diam, semper sit amet facilisis ac, pharetra
          sed justo. Nulla facilisi. Proin posuere ex eu pulvinar mollis. Nulla
          quis efficitur massa. Cras vulputate metus sit amet ante molestie
          sagittis. Cras finibus nunc a rhoncus mattis. Nam urna leo, maximus ac
          nibh at, condimentum varius libero. Donec laoreet dui vitae orci
          commodo, eget molestie est suscipit. Aliquam blandit nec risus vitae
          luctus. Mauris rhoncus ac lectus eget finibus. Praesent facilisis ac
          dui at dictum. Nam blandit, enim ornare placerat tincidunt, neque
          ligula faucibus lorem, sed sodales lectus arcu id nibh. Nulla lacinia
          neque risus, nec suscipit felis convallis eu. Quisque dignissim tellus
          non sollicitudin hendrerit. Fusce rhoncus iaculis velit. Praesent
          euismod tellus nec aliquam facilisis. Integer luctus mollis ex, id
          mollis elit porttitor at. Cras congue metus at lectus dictum, in
          laoreet massa posuere. Sed sapien ligula, imperdiet eget gravida sed,
          auctor eu nibh.{' '}
        </Box>
        <Box px={5} css={{ maxWidth: 600 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultrices lorem ac nunc porta interdum. Nam purus erat, porttitor sit
          amet accumsan at, blandit vel mauris. Praesent nec nisi mauris.
          Suspendisse nulla dui, sagittis eget venenatis id, elementum nec ante.
          Integer dignissim sem ipsum, id vehicula justo cursus et. Nulla
          porttitor massa vitae felis iaculis, at auctor urna accumsan. Nunc
          semper vulputate arcu a dignissim. In in velit maximus, vulputate
          libero in, lobortis leo. Quisque vel leo eget elit ornare aliquam.
          Praesent sed lectus vitae ante blandit molestie. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent aliquam commodo consequat. Cras tempor convallis
          dolor. Praesent egestas volutpat est, id lacinia diam elementum
          venenatis. Curabitur pellentesque justo eget nibh posuere, eget
          iaculis eros mattis. Curabitur commodo egestas felis sed ornare. Proin
          sollicitudin vehicula accumsan. Maecenas tempor porta elit ac pretium.
          Vivamus in arcu sed felis egestas egestas. Nulla varius lacus et lacus
          pretium, a faucibus odio fermentum. Nam convallis, diam eu commodo
          porttitor, sapien augue dignissim neque, et vehicula velit lorem vel
          nisi. Mauris rutrum, dui sed aliquam molestie, massa nulla tincidunt
          urna, nec faucibus lacus mi vel dui. Phasellus gravida condimentum
          orci, et vestibulum massa tristique quis. Nullam rutrum, ex eget
          varius dapibus, est nibh ultrices ipsum, a ultrices quam ex efficitur
          tortor. In at urna tempor, condimentum dolor eget, maximus tellus.
          Donec tempus tincidunt purus viverra rhoncus. Quisque pulvinar a ex
          sed suscipit. Donec maximus mauris vel turpis aliquet mattis. Nullam
          sapien elit, lobortis at dapibus ut, fringilla eu nulla. Vestibulum
          feugiat erat at finibus efficitur. Nullam venenatis laoreet
          consectetur. Proin elit diam, semper sit amet facilisis ac, pharetra
          sed justo. Nulla facilisi. Proin posuere ex eu pulvinar mollis. Nulla
          quis efficitur massa. Cras vulputate metus sit amet ante molestie
          sagittis. Cras finibus nunc a rhoncus mattis. Nam urna leo, maximus ac
          nibh at, condimentum varius libero. Donec laoreet dui vitae orci
          commodo, eget molestie est suscipit. Aliquam blandit nec risus vitae
          luctus. Mauris rhoncus ac lectus eget finibus. Praesent facilisis ac
          dui at dictum. Nam blandit, enim ornare placerat tincidunt, neque
          ligula faucibus lorem, sed sodales lectus arcu id nibh. Nulla lacinia
          neque risus, nec suscipit felis convallis eu. Quisque dignissim tellus
          non sollicitudin hendrerit. Fusce rhoncus iaculis velit. Praesent
          euismod tellus nec aliquam facilisis. Integer luctus mollis ex, id
          mollis elit porttitor at. Cras congue metus at lectus dictum, in
          laoreet massa posuere. Sed sapien ligula, imperdiet eget gravida sed,
          auctor eu nibh.{' '}
        </Box>
      </Flex>
    </Flex>
  </Layout>
)
