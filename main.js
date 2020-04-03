// INITIALIZING DOTENV
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import * as functions from "firebase-functions";
import api from "@/api";

// Exporting function api
exports.api = functions.https.onRequest(api);
