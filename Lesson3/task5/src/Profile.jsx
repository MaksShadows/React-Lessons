import React from 'react';
import moment from 'moment';
import './profile.scss';


const formatDate = date => moment(date).format("DD MMM YY");
<<<<<<< HEAD


=======
>>>>>>> 5f8d3c1b06ecc2c2e7e5b28467cdefa9ff7cd761

const Profile = (props) => {
    return (
        <>
            <div className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
<<<<<<< HEAD
            <div className="profile__birth">
=======
              <div className="profile__birth">
>>>>>>> 5f8d3c1b06ecc2c2e7e5b28467cdefa9ff7cd761
                {`Was born ${formatDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </div>
        </>
    );
};

export default Profile;
