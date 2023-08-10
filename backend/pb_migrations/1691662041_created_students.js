/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hse2gnrvqe016yg",
    "created": "2023-08-10 10:07:21.101Z",
    "updated": "2023-08-10 10:07:21.101Z",
    "name": "students",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "opbq3ikb",
        "name": "fees",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hse2gnrvqe016yg");

  return dao.deleteCollection(collection);
})
