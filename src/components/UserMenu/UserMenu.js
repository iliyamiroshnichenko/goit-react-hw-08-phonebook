const UserMenu = ({ email = 'iliyamiroshnichenko@gmail.com' }) => {
  return (
    <div>
      <span>Welcome, {email}</span>
      <button type="button">logOut</button>
    </div>
  );
};

export default UserMenu;
