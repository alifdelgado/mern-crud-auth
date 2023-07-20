import { connect } from "mongoose";

export const dbConnection = async () => {
  try {
    await connect("mongodb://localhost/merndb");
  } catch (error) {
    console.log(error);
  }
};
