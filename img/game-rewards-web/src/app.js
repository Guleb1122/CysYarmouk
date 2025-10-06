// This file is the entry point of the application. It initializes the app, sets up event listeners, and manages the overall application logic.

import React from 'react';
import ReactDOM from 'react-dom';
import RewardCard from './components/RewardCard';
import { fetchRewards } from './utils/rewards';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rewards: [],
        };
    }

    componentDidMount() {
        this.loadRewards();
    }

    loadRewards = async () => {
        const rewards = await fetchRewards();
        this.setState({ rewards });
    };

    render() {
        return (
            <div>
                <h1>Welcome to the Game Rewards</h1>
                <div className="reward-cards">
                    {this.state.rewards.map(reward => (
                        <RewardCard key={reward.id} reward={reward} />
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));