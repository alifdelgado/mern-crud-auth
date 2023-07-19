import { connect } from "mongoose";

export const dbConnection = async () => {
  try {
    await connect("mongodb://localhost/merndb");
    console.log("connection established");
  } catch (error) {
    console.log(error);
  }
};
