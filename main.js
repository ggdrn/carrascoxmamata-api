import * as functions from "firebase-functions";
import dotenv from "dotenv";
import api from "./src/api";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

exports.server = functions.https.onRequest(api);
