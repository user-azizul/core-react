import React from "react";

const GithubCard = ({ user }) => {
  const {
    login,
    created_at,
    followers,
    avatar_url,
    public_repos,
    following,
    html_url
  } = user;
  const date = new Date(created_at);
  const formattedDate = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: "short"
  })} ${date.getFullYear()}`;
  return (
    <div className="github-card">
      <div className="img-wrapper">
        <img src={avatar_url} alt="User" />
      </div>
      <div className="git-content">
        <h4 className="git-title">{login}</h4>
        <ul className="inner_content">
          <li className="git-list"> Repo: {public_repos} </li>
          <li className="git-list"> Followers: {followers} </li>
          <li className="git-list">Following:{following} </li>
        </ul>
        <p>{formattedDate}</p>
        <a href={html_url}> View Profile</a>
      </div>
    </div>
  );
};

export default GithubCard;
