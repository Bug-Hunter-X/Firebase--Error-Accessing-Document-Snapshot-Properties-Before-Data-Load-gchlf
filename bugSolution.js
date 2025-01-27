The solution involves using promises or async/await to ensure the data is fully loaded before accessing snapshot properties.  Here's an example using async/await:

```javascript
async function getData() {
  const docRef = doc(db, 'collection', 'docId');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    // Access properties safely here; they're guaranteed to be loaded
  } else {
    console.log('No such document!');
  }
}
```
Using promises:

```javascript
function getData() {
  const docRef = doc(db, 'collection', 'docId');
  getDoc(docRef).then(docSnap => {
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      // Access properties safely here
    } else {
      console.log('No such document!');
    }
  }).catch(error => {
    console.error('Error getting document:', error);
  });
}
```