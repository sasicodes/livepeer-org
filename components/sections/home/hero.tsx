/** @jsx jsx */
import { useRef, useEffect } from "react"
import { jsx, Container, Heading, Text, Button, Box } from "theme-ui"

import { gsap } from "gsap"
import { DURATION } from "lib/animations"

import { Divider } from "components/primitives/divider"

const HomeHero = () => {
  const section = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(!section.current) {
      return
    }

    const tl = gsap.timeline()

    tl.set(section.current, {
      autoAlpha: 0
    })

    //@ts-ignore
    tl.sectionFadeIn(section.current, { duration: DURATION })
  }, [])
  return (
    <Box sx={{ bg: "muted" }}>
      <Container
        variant="section"
        ref={section}
        className="hide__section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 5
        }}
      >
        <Box sx={{ maxWidth: "4xl", mb: ["32px", "40px"] }}>
          <Heading
            variant="heading.1"
            sx={{ fontSize: ["40px", "56px", "88px"] }}
          >
            The&nbsp;
            <Text as="span" variant="gradient">
              World's Open&nbsp;
            </Text>
            <br sx={{ display: ["none", "block"] }} />
            Video Infrascructure
          </Heading>
          <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
          <Heading variant="section.subtitle">
            Livepeer supports live streaming, video on demand, and transcoding
            across video formats and protocols.
          </Heading>
        </Box>
        <Button>Get started</Button>
        <Box
          sx={{ bg: "ultraLightGray", height: "500px", width: "100%", my: 4 }}
        />
      </Container>
    </Box>
  )
}

export default HomeHero
