const handleSetResult = (event) =>{
    event.preventDefault();
axios.get("https://www.googleapis.com/books/v1/volumes?q="+inputText+"&key"+apiKey+"&maxResults=12")
.then(data => {
    if (!data.errors) {
        setResult(data.data.items);
    }else{
        <h1>Ops...something wrong</h1>
        setResult([]);
    }
})
};