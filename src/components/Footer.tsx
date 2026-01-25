function Footer() {
  return (
    <footer className={`py-12 px-6 border-top`}>
      <div className="max-w-7xl mx-auto text-center">
        <p>Let's create something amazing together</p>
        <p className={`text-sm my-3`}>
          © 2026 Mohammad Iftekhar • Frontend Software Engineer • Gurugram,
          India
        </p>
        <p>
          <a
            href="https://github.com/iftekhar7/ife-portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-underlined"
          >
          <i className="fab fa-github mr-1"/>  View Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
