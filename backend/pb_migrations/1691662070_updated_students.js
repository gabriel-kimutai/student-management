/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tf5ksyyz",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg")

  // remove
  collection.schema.removeField("tf5ksyyz")

  return dao.saveCollection(collection)
})
