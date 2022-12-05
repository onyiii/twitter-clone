import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_input">
        <SearchIcon className="widget_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget_widgetContainer">
        <h2>What's Happening?</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
      Hello heyy
    </div>
  );
};

export default Widget;
