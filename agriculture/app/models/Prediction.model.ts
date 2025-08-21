import mongoose,{Document,Types} from 'mongoose'

export interface IPrediction extends Document {
  farmer: Types.ObjectId;   // References Farmer
  crop: Types.ObjectId;     // References Crop
  disease?: Types.ObjectId; // References Disease
  imagePath: string;
  confidenceScore: number;
  createdAt: Date;
}

const PredictionSchema = new mongoose.Schema<IPrediction>({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
    required: true 
},
  crop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crop", 
    required: true 
},
  disease: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Disease" 
},
  imagePath: {
    type: String,
    required: true
 },
  confidenceScore: {
    type: Number,
    required: true },

},{timestamps: true});

export const Prediction = mongoose.models?.Prediction || mongoose.model<IPrediction>("Prediction", PredictionSchema);