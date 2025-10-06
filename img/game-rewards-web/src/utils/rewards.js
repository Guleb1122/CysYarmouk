export const fetchRewards = async () => {
    try {
        const response = await fetch('/api/rewards');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const rewards = await response.json();
        return rewards;
    } catch (error) {
        console.error('Error fetching rewards:', error);
        return [];
    }
};

export const calculateRewardPoints = (transactions) => {
    return transactions.reduce((total, transaction) => {
        return total + transaction.points;
    }, 0);
};