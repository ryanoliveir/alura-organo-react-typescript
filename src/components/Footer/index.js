import './Footer.css'

const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='social-images'>
                <a href='https://www.instagram.com/aluraonline/' target="_blank" rel="noopener noreferrer"><img src='/images/fb.png' alt='fb-icon'/></a>
                <a href='https://www.instagram.com/aluraonline/' target="_blank" rel="noopener noreferrer"><img src='/images/tw.png' alt='fb-icon'/></a>
                <a href='https://www.instagram.com/aluraonline/' target="_blank" rel="noopener noreferrer"><img src='/images/ig.png' alt='fb-icon'/></a>
            </div>
            <div className='log'>
                <img src="/images/logo.png" alt='logo'/>
            </div>
            <div className='dev-by'>
                <span>Desenvolvido por Alura</span>
            </div>
        </section>
    )
}

export default Footer;