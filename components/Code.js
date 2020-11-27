import SyntaxHighlighter from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

const Code = () => {
  return (
    <SyntaxHighlighter language='javascript' style={style}>
      {`export async function getServerSideProps({ req }) {
  const ips = {
    'headers: x-forwarded-for': req.headers['x-forwarded-for'] || null,
    'connection.remoteAddress:': req.connection.remoteAddress || null,
    'socket.remoteAddress: ': req.socket.remoteAddress || null
  }
  return {
    props: {
      ips
    }
  }
}`}
    </SyntaxHighlighter>
  )
}
export default Code
