import '../style-sheets/RecommendedUsers.css'
import { Link } from '@mui/material';

const RecommendedUsers = () => {
    
    
    return (
        <div className="recommended-users-container">
           <h2 className="recommended-users-text">Recommended Users</h2>
           <Link className="view-all-button">View all</Link>
        </div>
    )
}

export default RecommendedUsers;