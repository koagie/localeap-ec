import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels"

const createItem = async(req, res) => {
  try {
    await connectDB()
    console.log(req.body);
    await ItemModel.create(req.body)
    return res.status(200).json({
      message: "item作成success!!!!!!!"
    })
  } catch (err) {
    return res.status(400).json({
      message: "making item failed!!!"
    })
  }
}

export default createItem

