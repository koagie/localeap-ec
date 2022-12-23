import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels"

const createItem = (req, res) => {
  connectDB()
  console.log(req.body.title);
  return res.status(200).json({
    message: "item作成"
  })
}

export default createItem

