/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  collection.indexes = [
    "CREATE INDEX `idx_4KfG9pN` ON `students` (`regNo`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uruafcyt",
    "name": "regNo",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  collection.indexes = []

  // remove
  collection.schema.removeField("uruafcyt")

  return dao.saveCollection(collection)
})
