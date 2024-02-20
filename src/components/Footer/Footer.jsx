import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} className={styles.favourites}>
          <img src={LOGO} alt="stuff" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{' '}
        <a href="#" target="_blank" rel="noreferrer">
          Nikolay Shaytor
        </a>
      </div>

      <div className={styles.socials}>
        <a href="#" target="_blank">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
            ></use>
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
            ></use>
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
            ></use>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Footer
