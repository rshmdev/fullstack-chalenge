import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  name: { type: String },
  base_experience: { type: Number },
  image: { type: String },
  weight: { type: Number },
  height: { type: Number },
  id: { type: Number },
  captured_at: { type: Date },
  stats: [
    {
      base_stat: { type: Number },
      type: { type: String },
    },
  ],
});

export default PokemonSchema;
