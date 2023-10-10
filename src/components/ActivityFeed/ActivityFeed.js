import React from 'react';
import './ActivityFeed.css';

const activities = [
    { id: 1, author: 'Kushantha Charuka', action: 'created', content: 'Contract #00124 need John Beige’s signature', timestamp: 'Sep 16, 2022 at 11:30 AM' },
    { id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque', timestamp: 'Sep 16, 2022 at 11:45 AM' },
    // ... Add other activities here
];

const ActivityCard = ({ activity }) => (
    <div className="activity-card">
        {activity.author && <strong>{activity.author} {activity.action}</strong>}
        <p>{activity.content}</p>
        <span className="timestamp">{activity.timestamp}</span>
    </div>
);

const ActivityFeed = () => {
    return (
        <div className="activityFeed">
            <div className="contentWrapper">
                <h2>Activity Feed</h2>
                {activities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
