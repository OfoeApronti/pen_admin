import  React, {PropTypes} from 'react';
import ActiveHeader from './common/ActiveHeader';

class App extends React.Component{
	render(){
		return(
      <div className="container">
        <ActiveHeader />
        {this.props.children}
      </div>
    );
	}
}
App.propTypes={ 
  children:PropTypes.object.isRequired
};
export default App;