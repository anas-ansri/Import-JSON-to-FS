Import JSON to Cloud Firestore
==============================

This repository contains a JavaScript tool that allows you to easily import a JSON file to your Cloud Firestore database.

Prerequisites
-------------

-   A Google Cloud Platform account and a project with Cloud Firestore enabled
-   Node.js and npm installed on your machine
-   A JSON file that you want to import to Cloud Firestore. Make sure to convert any other file types (e.g. Excel, CSV) to JSON first.

Installation
------------

To install the dependencies, run the following command:

`npm install`

Usage
-----

1.  Clone this repository and navigate to the directory

2.  Update the values in the `.env` file with your own Cloud Firestore project ID, private key ID, and other relevant details.

3.  In `index.js`, specify the name of your JSON file and the collection you want to import it to. If you want to import the JSON to a specific document within a collection, you can also specify the document ID.

4.  Run the following command to import the JSON file:

`node index.js`

Tips
----

-   Make sure that your JSON file is valid. You can use a tool like [JSONLint](https://jsonlint.com/) to validate your JSON.

-   By default, the tool will overwrite any existing documents with the same ID. If you want to preserve the existing documents, you can set the `merge` option to `true` in the `index.js` file.

Contributing
------------

If you find a bug or want to suggest a new feature, you can create an issue or a pull request. We welcome all contributions!
