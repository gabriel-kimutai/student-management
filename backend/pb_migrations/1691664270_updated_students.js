/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  collection.name = "studentInfo"
  collection.indexes = [
    "CREATE INDEX `idx_4KfG9pN` ON `studentInfo` (`regNo`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  collection.name = "students"
  collection.indexes = [
    "CREATE INDEX `idx_4KfG9pN` ON `students` (`regNo`)"
  ]

  return dao.saveCollection(collection)
})
