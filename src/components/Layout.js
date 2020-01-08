import Container from "@material-ui/core/Container"

const layoutStyle = {
  marginTop: '64px',
}

export const withLayout = (Page) => {
  const Layout = (props) => (
    <Container style={{ ...layoutStyle, ...props.style }}>
      <Page {...props} />
    </Container>
  )

  if (Page.getInitialProps) {
    Layout.getInitialProps = Page.getInitialProps
  }

  return Layout
}

const Layout = (props) => (
  <Container maxWidth={props.maxWidth}
    style={{ ...layoutStyle, ...props.style }}>
    {props.children}
  </Container>
)

export default Layout