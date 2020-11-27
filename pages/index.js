const Index = ({ ips }) => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10'>
        Meu IP
      </h1>
      <div>
        <h2>Descobrindo o IP do usuário pelo NodeJS:</h2>
        <pre className='bg-gray-100 px-4 py-2 rounded shadow'>
          {JSON.stringify(ips, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
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
}

export default Index
