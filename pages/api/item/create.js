
const createItem = (req, res) => {
  console.log(req.body.title);
  return res.status(200).json({
    message: "item作成"
  })
}

export default createItem


https://data.mongodb-api.com/app/data-ydtfo/endpoint/data/v1

cmXUItLBbWcGLuLQM3KDFOOi4nS27tMcbSkbwopK7IIiG4NiWj8C2kbea1GgXB7H