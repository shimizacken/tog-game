import React, { Component } from 'react';
import DrivingDashboardContainer from './features/driveDashboard';
import styles from './app.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <DrivingDashboardContainer />
      </div>
    );
  }
}

export default App;
