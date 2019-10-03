// Import External libraries
import React from "react";

import "./UserCard.css";

//  Render Component Content
class UserCard extends React.Component {
    displayCard = () => {
        if (this.props.userInfo) {
            const {
                avatar_url,
                name,
                login,
                bio,
                public_repos,
            } = this.props.userInfo;

            const {onInfoSelect} = this.props;

            return (
                <div>
                    <div className="row user-card gutters-0">
                        <div className="col-s-3 col-md-3 col-lg-3 profile-pic-container">
                            <img className="profile-pic rounded" src={avatar_url} alt="profile"/>
                            <div className="name ml-2">
                                <h2>{name}</h2>
                                <span>@{login}</span>
                            </div>
                        </div>
                        <div className="col-s-9 col-md-9 col-lg-9 info-summary-container gutters-0">
                            <div className="info-summary">
                                <div className="row bio-info">
                                    <p>{bio}</p>
                                </div>
                                <div className="row bottom-link">
                                    <span className="col-sm-3 col-md-3 col-lg-3" onClick={() => onInfoSelect("repos")} >
                                        Public Repositories
                                        <span className="badge badge-orange">{public_repos}</span>
                                    </span>
                                    <span className="col-sm-3 col-md-3 col-lg-3" onClick={() => onInfoSelect("orgs")} >
                                        Public Organizations
                                        <span className="badge badge-orange">{this.props.orgs}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return <div>Could not load the user info</div>;
    };

    render() {
        return this.displayCard();
    }
}

// Export the component
export default UserCard;
