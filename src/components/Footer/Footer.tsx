import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_decorator"></div>
      <div className="footer_content">
        <p>
        Szymon Bosiak {(new Date().getFullYear())} @ All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
