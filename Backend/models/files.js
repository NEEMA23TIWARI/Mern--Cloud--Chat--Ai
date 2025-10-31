import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
    {
        filename: { type: String, required: true },
        filepath: { type: String, required: true },
        mimetype: { type: String },
        size: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model("File", fileSchema);