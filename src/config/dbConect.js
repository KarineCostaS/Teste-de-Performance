import mongoose from "mongoose";

mongoose.connect("mongodb+srv://karine:123@bandas-rock.ux0aeh3.mongodb.net/rocknjeans");

let db = mongoose.connection;

export default db;
