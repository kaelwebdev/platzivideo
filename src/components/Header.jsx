import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/imgs/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons/user-icon.png';

const Header = (props) => {
  const { user, isCustomHeader } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isCustomHeader,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              (
                <>
                  <li>
                    <a href='/'>{user.name}</a>
                  </li>
                  <li>
                    <a href='#logout' onClick={handleLogout}>
                      Cerrar Sesión
                    </a>
                  </li>
                </>
              ) :
              (
                <li>
                  <Link to='/login'>
                    Iniciar Sesión
                  </Link>
                </li>
              )
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isCustomHeader: state.isCustomHeader,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
