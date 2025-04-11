import React, { useEffect, useState } from "react"
import { useLoaderData,useParams } from 'react-router-dom'

function Github() {
    const profileData = useLoaderData();
    const {username} = useParams();
    // const [profileData, setProfileData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then (data => {console.log(data); setProfileData(data); });
    // }, []);
   
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{profileData.followers}
    <img src={profileData.avatar_url} alt="Git picture" width={300} />
    
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchaudhary');
    return response.json();
}