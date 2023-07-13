import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operationsAuth';
import { useAuth } from '../../hooks/useAuth';
import {UserMenuButton,UserMenuWrapper, UserNameField } from '../UserMenu/UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserNameField>Welcome, {user.name}</UserNameField>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuWrapper>
  );
};
