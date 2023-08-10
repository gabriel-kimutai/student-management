/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5jg1jpxg",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  // remove
  collection.schema.removeField("5jg1jpxg")

  return dao.saveCollection(collection)
})
