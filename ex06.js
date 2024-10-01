// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
    let queryStrings = url.split('?')[1];
    let queryParams = {};

    if (queryStrings === undefined) {
        return queryParams;
    }

    queryStrings.split('&').map((queryString) => {
        let query = queryString.split('=')

        queryParams[query[0]] = query[1];
    })

    return queryParams;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }