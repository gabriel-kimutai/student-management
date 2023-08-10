/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mb2bu3q9",
    "name": "student",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "hse2gnrvqe016yg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mb2bu3q9",
    "name": "student",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "hse2gnrvqe016yg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "regNo"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
