import React from 'react';
import moment from 'moment';


const formatDate = date => 
  moment(date).format("DD MMM YYYY");


const Profile = props => {
  return(
    <>
     <h1 className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</h1>
    <p className="profile__birth">{`Was born ${formatDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}</p>
    </>
  );
};

export default Profile;
