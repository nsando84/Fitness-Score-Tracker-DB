

// load indexedDb //

let db;
const request = indexedDB.open('airmanDb', 1)
    
request.onupgradeneeded = event => {
    db = event.target.result
    console.log('upgraded DB')
    db.createObjectStore('airmanData', {keyPath: 'airMan', autoIncrement: true})
}

request.onsuccess = event => {
    db = event.target.result
    viewResult()
    console.log('success DB') 
}

request.onerror = event => {
    console.log('err =' +event.target)
}


// add searched airman into the indexedDb //

function addData (result) {
    const trans = db.transaction('airmanData', 'readwrite')
    const airManData = trans.objectStore('airmanData')
    trans.onerror = e => console.log(e)
    airManData.add(result)
}
 

// viewed results into the chart //

function viewResult () {
    const transact = db.transaction('airmanData', 'readonly')
    const airmanData = transact.objectStore('airmanData')
    const request = airmanData.openCursor()
    request.onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
            loadSearches(cursor)
            cursor.continue()
        }
    }
}