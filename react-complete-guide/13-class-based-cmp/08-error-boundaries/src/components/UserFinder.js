import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UserContext from '../store/user-context';
import ErrorBoundary from './ErrorBoundary';
/*   
  componentDidMount
  componentDidUpdate
  componentWillUnmount
*/
class UserFinder extends Component {
  // 단 1개의 컨텍스트만 연결 가능한 방법
  static contextType = UserContext;

  //   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  //   const [searchTerm, setSearchTerm] = useState('');
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  // useEffect(() => {
  //     setFilteredUsers(
  //       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
  //     );
  //   }, [searchTerm]);
  componentDidUpdate(prevProps, prevState) {
    // 의존성 배열 설정
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(user =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  //   const searchChangeHandler = (event) => {
  //     setSearchTerm(event.target.value);
  //   };
  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  // return (
  //     <Fragment>
  //       <div className={classes.finder}>
  //         <input type='search' onChange={searchChangeHandler} />
  //       </div>
  //       <Users users={filteredUsers} />
  //     </Fragment>
  //   );
  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}
export default UserFinder;
