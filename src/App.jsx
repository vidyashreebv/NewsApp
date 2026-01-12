export const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Spaceflight News Dashboard</h1>
        <p style={styles.subtitle}>
          Stay updated with the latest space exploration news
        </p>
      </header>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
    color: '#ffffff',
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    marginBottom: '12px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    fontSize: '18px',
    opacity: '0.95',
  },
}
