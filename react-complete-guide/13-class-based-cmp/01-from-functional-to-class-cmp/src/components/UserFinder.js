import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

/*   
  componentDidMount
  componentDidUpdate
  componentWillUnmount
*/
class UserFinder extends Component {
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
    this.setState({ filteredUsers: DUMMY_USERS });
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
        filteredUsers: DUMMY_USERS.filter(user =>
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
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}
export default UserFinder;
