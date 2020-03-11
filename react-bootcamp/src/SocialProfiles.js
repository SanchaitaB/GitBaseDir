import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component
{
    render()
    {
        const {image,link} = this.props.profile;
        return(
                <a href={link}>
                    <img src={image} style={{width:20, height:20, margin:2}}/>
                </a>
        );
    };
}



class SocialProfiles extends Component
{
    render()
    {
        return(
            <div>
                <h2>Connect with me!</h2>
                <div> 
                {
                    SOCIAL_PROFILES.map(
                        SOCIAL_PROFILE => {
                            return (
                                <SocialProfile key={SOCIAL_PROFILE.id} profile={SOCIAL_PROFILE}></SocialProfile>
                            )
                        }
                    )
                }
                </div>
            </div>
        )
    }
}
export default SocialProfiles