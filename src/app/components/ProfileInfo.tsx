import React from "react";
import CardInfo from "./utils/CardInfo";

interface InfosProps {
    profile: {
        name: string;
        bio?: string;
        followers: string;
        following: string;
        location?: string;
        avatar_url?: string;
    };
}

const ProfileInfo: React.FC<InfosProps> = ({ profile }) => {
    const infos = [
        { title: "Followers", data: profile.followers.toString() },
        { title: "Following", data: profile.following.toString() },
        { title: "Location", data: profile.location || 'Location' },
    ];

    console.log(profile.avatar_url);

    return (
        <div className="flex flex-col gap-1 ">
            <div className="">
                <div className="image-profile absolute">
                    <img
                        src={profile.avatar_url || 'https://www.w3schools.com/howto/img_avatar.png'}
                        alt="Profile"
                    />
                </div>
                <div className="user-cardInfo flex gap-5">
                    {infos.map((info, index) => (
                        <CardInfo key={index} title={info.title} data={info.data} />
                    ))}
                </div>
            </div>
            
            <div className="user-repo" style={{marginTop: "25px"}}>
                <h1 className="text-xl font-bold">{profile.name}</h1>
                {profile.bio && <p className="text-gray-500">{profile.bio}</p>}
            </div>
        </div>
    );
};

export default ProfileInfo;