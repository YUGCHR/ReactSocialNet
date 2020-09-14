//const { default: profileReducer } = require("./profile-reducer");
import React, { ReactDOM } from "react";
import { default as profileReducer, addPostActionCreator, deletePost } from "./profile-reducer";
import App from "../App";

let state = {
  posts: [
    { id: 1, message: "Hi! Are you OK?", likeCount: 5 },
    { id: 2, message: "I am fine", likeCount: 3 },
    { id: 3, message: "And what about you?", likeCount: 1 },
    { id: 4, message: "I am fine also", likeCount: 7 },
    { id: 5, message: "We are fine today", likeCount: 2 },
    { id: 6, message: "This is the wondeful world!", likeCount: 30 },
  ],
};

test("length of posts should be incremented", () => {
  // 1. data for testing
  let action = addPostActionCreator("addition post text");
  
  // 2. testing action
  let newState = profileReducer(state, action);

  // 3. expected results
  expect(newState.posts.length).toBe(7);
});

test("message of new posts should be correct", () => {
  // 1. data for testing
  let action = addPostActionCreator("addition post text");
  
  // 2. testing action
  let newState = profileReducer(state, action);

  // 3. expected results
  expect(newState.posts[6].message).toBe("addition post text");
});

test("messages length should be decremented after delete", () => {
  // 1. data for testing
  let action = deletePost(5);
  
  // 2. testing action
  let newState = profileReducer(state, action);

  // 3. expected results
  expect(newState.posts.length).toBe(5);
});

