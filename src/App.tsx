
import LandingPage from './components/LandingPage/LandingPage'

export default function App() {
  return <LandingPage />

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: '#fafafa',
        color: '#333',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '6rem', margin: 0, fontWeight: 700, color: '#222' }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: '#666', marginTop: '0.5rem' }}>
        This page could not be found.
      </p>
    </div>
  )
}
