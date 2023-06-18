import React, {useEffect, useState, useContext} from 'react';
import {Link, useLocation, Navigate, useNavigate} from 'react-router-dom';
import useFetch from "hooks/useFetch";
import useLocalStorage from "hooks/useLocalStorage";
import {CurrentUserContext} from 'contexts/currentUser'
import BackendErrorMessages from 'components/BackendErrorMessages';
import ButtonLink from 'components/ButtonLink';
import Button from 'components/Button';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';


const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const pageTitle = isLogin ? 'Войти' : 'Зарегистрироваться';
  const descriptionText = isLogin ? 'Вам нужно создать аккаунт?' : 'У Вас уже есть аккаунт?';
  const apiUrl = isLogin ? '/api/auth/user-password-login' : '/api/auth/registration';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [isOrganization, setIsOrganization] = useState(false);

  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
  const [, setToken] = useLocalStorage('token');
  const [currentUserState, dispatch] = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = isLogin ? {
      username: userName,
      password
    } : {
      first_name:firstName,
      last_name: lastName,
      username: userName,
      email: email,
      password: password,
      password2: repeatPassword,
      is_organization: isOrganization,
    };
    doFetch({
      method: 'post',
      data: {
        ...request
      },
    });
  }

  useEffect(() => {
    if (!response) {
      return
    };

    setToken(response.access_token);
    setIsSuccessfullSubmit(true);
    dispatch({type: 'SET_AUTHORIZED', payload: response.user});

  }, [response, setToken, dispatch])

  if (isSuccessfullSubmit) {
    const fromPage = location.state?.from?.pathname || '/shop-counter';

    return <Navigate to={fromPage}/>
  }

  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>{pageTitle}</h1>
            <p className='text-xs-center'>
              <ButtonLink onClick={() => navigate(isLogin ? "/register" : "/login")}>
                {descriptionText}
              </ButtonLink>
            </p>
            <form action="" onSubmit={handleSubmit}>
              {error && <BackendErrorMessages backendErrors={error.errors} /> }
              <fieldset>
                  {
                    !isLogin && (
                        <>
                          <Input
                            label='Имя'
                            onInput={e => setFirstName(e.target.value)}
                          />
                          <Input
                            label='Фамилия'
                            onInput={e => setLastName(e.target.value)}
                          />
                          <Input
                            type="email"
                            label='Email'
                            onInput={e => setEmail(e.target.value)}
                          />
                        </>
                    )
                  }
                <Input
                  label='Имя в профиле'
                  onInput={e => setUsername(e.target.value)}
                />
                <Input
                  type="password"
                  label='Пароль'
                  onInput={e => setPassword(e.target.value)}
                />
                {
                  !isLogin && (
                    <>
                      <Input
                        type="password"
                        label='Повторите Пароль'
                        onInput={e => setRepeatPassword(e.target.value)}
                      />
                      <div>
                        <Checkbox
                          value={isOrganization}
                          label='Регистрируется ООО?'
                          onChange={() => setIsOrganization(v => !v)}
                        />
                      </div>
                    </>
                  )
                }
                <Button
                  type="submit"
                  disabled={isLoading}
                >
                  {pageTitle}
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication;