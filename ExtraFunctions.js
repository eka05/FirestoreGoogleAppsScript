function getDocuments(collectionPath) {
    const config = getFirestoreConfig();
    
    const baseUrl = "https://firestore.googleapis.com/v1/projects/" + config.projectId + "/databases/(default)/documents/" + collectionPath;
    
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + ScriptApp.getOAuthToken(),
            "Accept": "application/json"
        }
    };

    const response = UrlFetchApp.fetch(baseUrl, options);
    return JSON.parse(response.getContentText());
}
