import mongoose from 'mongoose'

export interface ICrop extends Document {
  name: string;
  cropType: "Cereal" | "Fruit" | "Vegetable" | "Pulse" | "Other";
  season?: string;
}

const CropSchema = new mongoose.Schema<ICrop>({
  name: { 
    type: String, 
    required: true
 },
  cropType: { 
    type: String, 
    enum: ["Cereal", "Fruit", "Vegetable", "Pulse", "Other"], 
    required: true 
  },
  season: {
     type: String
    }
});

export const Crop = mongoose.models?.Crop || mongoose.model<ICrop>("Crop", CropSchema);

