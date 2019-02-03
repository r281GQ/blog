import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Flex, Image, Text } from 'rebass'

import { Collapseable } from './../../components/Collapseable'
import ExternalLink from '../../components/ExternalLink'
import Hyphens from './../../components/Hyphens'

import profile from './../../images/profile.jpg'

import { Container } from './styled'

const About = props => (
  <StaticQuery
    query={graphql`
      query userLinks {
        site {
          siteMetadata {
            userTwitter
            userLinkedIn
            userGitHub
            userEmail
            userYoutube
          }
        }
      }
    `}
    render={result => (
      <Box flex="1" as={Container} value={800}>
        <Text fontSize={7} my={4}>
          about
        </Text>
        <Flex flexDirection={['column', 'row']}>
          <Flex flex="1" flexDirection="column">
            <Image src={profile} />
            <Flex
              flexDirection={['row', 'column']}
              justifyContent="space-between"
              alignItems="baseline"
              my={[4, 0]}
            >
              <Text
                alignSelf="center"
                as={Collapseable}
                my={4}
                textAlign="center"
                collapse={0}
              >
                contact me
              </Text>
              <Box as={Collapseable} collapse={0}>
                <Text mb={3}>
                  Here are some links to check out. If you have any question
                  feel free to drop me a message using one of the options below.
                </Text>
              </Box>
              <Text>
                <ExternalLink to={result.site.siteMetadata.userTwitter}>
                  twitter
                </ExternalLink>
              </Text>
              <Text>
                <ExternalLink to={result.site.siteMetadata.userLinkedIn}>
                  linkedin
                </ExternalLink>
              </Text>
              <Text>
                <ExternalLink to={result.site.siteMetadata.userGitHub}>
                  github
                </ExternalLink>
              </Text>
              <Text>
                <ExternalLink to={result.site.siteMetadata.userEmail}>
                  email
                </ExternalLink>
              </Text>
              <Text>
                <ExternalLink to={result.site.siteMetadata.userYoutube}>
                  youtube
                </ExternalLink>
              </Text>
            </Flex>
            <Flex as={Collapseable} collapse={0} flexDirection="column">
              <Text textAlign="center" my={3}>
                Some thoughts about this site
              </Text>
              <Text my={3}>
                This is built with Gatsby.js sitting on AWS. Gatsby is an
                amazing static-site generator built around React, Redux, Graphql
                and SSR. I am using Rebass as a component library here with some
                Ramda to set up the neccessary logic.
              </Text>
            </Flex>
          </Flex>
          <Flex px={3} flex="1" width="100%" flexDirection="column">
            <Text as={Hyphens} fontFamily="Muli">
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </Text>
          </Flex>
        </Flex>
      </Box>
    )}
  />
)

export default About
