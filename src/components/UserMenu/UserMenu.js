import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const { getUserEmail } = authSelectors;

const UserMenu = ({ email }) => {
  return (
    <div>
      <span>Welcome, {email}</span>
      <button type="button">Log Out</button>
    </div>
  );
};
const mapStateToProps = state => ({
  email: getUserEmail(state),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserMenu);
