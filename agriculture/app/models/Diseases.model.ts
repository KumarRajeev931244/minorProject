import mongoose,{Document,Schema,model} from "mongoose";

export interface IDisease extends Document {
  name: string;
  symptoms: string;
  treatment: string;
}

const DiseaseSchema = new Schema<IDisease>({
  name: {
    type: String, 
    required: true
 },
  symptoms: {
    type: String 
    },
  treatment: {
     type: String
    }
});

export const Disease = mongoose.models?.Disease || model<IDisease>("Disease", DiseaseSchema);

