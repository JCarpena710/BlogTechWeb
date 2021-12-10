import { BASE_URL } from "../index";
import * as METHODS from "../methods";

const URL = `${BASE_URL}user`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20xIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2Mzg5ODEwNjd9.uUuq2vq7bvxL-k8XwvjB82adWFbqh0bm1dWzyu70jdA";

export const list = async () => {
  try {
    const response = await fetch(`${URL}/users`, METHODS.GET(token));
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
