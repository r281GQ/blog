import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import urljoin from 'url-join'

import favicon from './../../images/logo.png'

export default class SearchEngineOptimization extends Component {
  static defaultProps = {
    isJournal: true,
    postMeta: {
      path: '',
    },
  }

  renderOpenGraphTypeMeta = isJournal =>
    isJournal ? <meta property="og:type" content="article" /> : null

  getSchema = ({ meta, isJournal }) => {
    const { title, description, image, postURL, blogURL, alternateName } = meta

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName,
      },
    ]

    if (isJournal) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        }
      )
    }

    return schemaOrgJSONLD
  }

  getMetaData = ({ siteMetadata, isJournal, postMeta, excerpt }) => {
    const {
      siteUrl,
      pathPrefix,
      siteTitleAlt,
      siteTitle,
      siteDescription,
      siteLogo,
      author,
      userTwitter: userTwitterFromConfig,
      siteFBAppID: siteFBAppIDFromConfig,
    } = siteMetadata

    const title = isJournal ? postMeta.title : siteTitle
    const description = isJournal ? excerpt : siteDescription

    let image = ''
    if (process.env.NODE_ENV === 'development') {
      image = isJournal
        ? urljoin(
            siteUrl,
            pathPrefix,
            require(`../../../content/pictures/${postMeta.cover}`).substring(22)
          )
        : urljoin(
            siteUrl,
            pathPrefix,
            require(`../../images/${siteLogo}`).substring(22)
          )
    } else {
      image = isJournal
        ? urljoin(
            siteUrl,
            pathPrefix,
            require(`../../../content/pictures/${postMeta.cover}`)
          )
        : urljoin(siteUrl, pathPrefix, require(`../../images/${siteLogo}`))
    }

    const postURL = urljoin(siteUrl, pathPrefix, postMeta.path)
    const blogURL = urljoin(siteUrl, pathPrefix)
    const alternateName = siteTitleAlt ? siteTitleAlt : ''
    const siteFBAppID = siteFBAppIDFromConfig ? siteFBAppIDFromConfig : ''
    const userTwitter = userTwitterFromConfig ? userTwitterFromConfig : ''
    const openGrapsUrl = isJournal ? postURL : blogURL

    return {
      title,
      description,
      image,
      postURL,
      blogURL,
      alternateName,
      userTwitter,
      siteFBAppID,
      openGrapsUrl,
      author,
    }
  }

  render = () => {
    return (
      <StaticQuery
        query={graphql`
          query searchEngineOptimization {
            site {
              siteMetadata {
                siteUrl
                pathPrefix
                siteTitle
                userTwitter
                siteFBAppID
                siteLogo
              }
            }
          }
        `}
        render={data => {
          const { postMeta, isJournal, excerpt } = this.props

          const meta = this.getMetaData({
            siteMetadata: data.site.siteMetadata,
            isJournal,
            excerpt,
            postMeta,
          })

          const schemaOrgJSONLD = this.getSchema({ meta, isJournal })

          const {
            title,
            description,
            image,
            userTwitter,
            siteFBAppID,
            openGrapsUrl,
            author,
          } = meta

          return (
            <Helmet
              title={title}
              link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
              ]}
            >
              {/* General tags */}
              <meta name="title" content={title} />
              <meta name="description" content={description} />
              <meta name="image" content={image} />
              <meta name="author" content={author} />

              {/* Schema.org tags */}
              <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
              </script>

              {/* OpenGraph tags */}
              <meta property="og:url" content={openGrapsUrl} />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={image} />
              <meta property="fb:app_id" content={siteFBAppID} />
              {this.renderOpenGraphTypeMeta(isJournal)}

              {/* Twitter Card tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content={userTwitter} />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={image} />
            </Helmet>
          )
        }}
      />
    )
  }
}
