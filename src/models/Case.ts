import mongoose from "mongoose";

interface caseAttr {
    caseID: string,
    judges: string[],
    lawyers: string[],
    clients: string[]
}

const caseSchema = new mongoose.Schema<caseAttr>(
    {
        caseID: {
            type: String,
            required: true
        },
        judges: [{
            type: String,
            required: true
        }],
        lawyers: [{
            type: String,
            required: true
        }],
        clients: [{
            type: String,
            required: true
        }]
    }
)

const Case = (mongoose.models.Case as mongoose.Model<caseAttr>)|| mongoose.model<caseAttr>("Case", caseSchema)

export default Case;