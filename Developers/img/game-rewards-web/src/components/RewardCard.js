class RewardCard {
    constructor(reward) {
        this.reward = reward;
        this.isClaimed = false;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'reward-card';
        card.innerHTML = `
            <h3>${this.reward.title}</h3>
            <p>${this.reward.description}</p>
            <button>${this.isClaimed ? 'Claimed' : 'Claim Reward'}</button>
        `;
        card.querySelector('button').addEventListener('click', () => this.claimReward());
        return card;
    }

    claimReward() {
        if (!this.isClaimed) {
            this.isClaimed = true;
            alert(`You have claimed the reward: ${this.reward.title}`);
            this.render(); // Re-render the card to update the button
        }
    }
}

export default RewardCard;