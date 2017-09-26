import React, { Component } from 'react'
import Layout from '~/components/Layout'
import stylesheet from 'styles/index.scss'
import { Hero, HeroBody, Container, Title, Subtitle } from 're-bulma'

export default class Index extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Layout>
          <Hero color="isPrimary" size="isFullheight">
            <HeroBody>
              <Container hasTextCentered>
                <Title>Hero title</Title>
                <Subtitle>Hero subtitle</Subtitle>
              </Container>
            </HeroBody>
          </Hero>
        </Layout>
      </div>
    )
  }
}
