import mongoose from "mongoose";

const bandaSchema = new mongoose.Schema(
    {
    
    id: {type: String},
    titulo: {type: String, required: true},
  
    
    }
);

const bandas = mongoose.model('bandas', bandaSchema);

export default bandas;
