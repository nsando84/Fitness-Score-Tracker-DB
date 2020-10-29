

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
    loadRecentSearches()
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
    delete result._id
    airManData.add(result)
}
 



// viewed results into the chart //

function loadRecentSearches () {
    const transact = db.transaction('airmanData', 'readonly')
    const airmanData = transact.objectStore('airmanData')
    const request = airmanData.openCursor()
    request.onsuccess = event => {
        const cursor = event.target.result
        if (cursor) {
            loadSearches(cursor.value.name)
            cursor.continue()
        }
    }
}

// click on name creates chart //

function queryName (queryName) {
    const transact = db.transaction('airmanData', 'readonly')
    const airmanData = transact.objectStore('airmanData')
    const request = airmanData.openCursor()
    request.onsuccess = event => {
        const cursor = event.target.result
        if (cursor) {
            const cursorSearch = cursor.value.name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
            if (queryName == cursorSearch) {
                console.log(cursor.value)
                makeChart(cursor.value)
            }
            cursor.continue()
        }
    }
}


// delete from chart 5 limit-size //

function delFromChart(dataToDelete) {
    const transact = db.transaction('airmanData', 'readwrite')
    const airmanData = transact.objectStore('airmanData')
    const request = airmanData.openCursor()
    request.onsuccess = event => {
        const cursor = event.target.result
        if (cursor) {
            const cursorDelSearch = cursor.value.name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
            if (dataToDelete == cursorDelSearch) {
                cursor.delete()
            }
            cursor.continue()
        }
    }
}