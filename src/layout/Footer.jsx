function Footer() {
  return (
    <footer className="page-footer blue-grey lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Nikita 'Limurik' Ugolev
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/NUgolev/react-movies"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
