import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const { getUserEmail } = authSelectors;

const UserMenu = ({ email, onLogout }) => {
  return (
    <div>
      <span>Welcome, {email}</span>
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
