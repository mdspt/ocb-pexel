const auth_key = 'JOaxzyKymlejBp7hSnJ1wPJDoySCVb1TeNtpridX34nMcqwDvYpf7srV'
const pexel_api = 'https://api.pexels.com/v1/'

function submitForm() {
    const searchValue = document.getElementById("search").value
    const imageCount = document.getElementById("image-count").value

    if(!imageCount) {
        alert('Please enter a value for image to generate.')
    }
    else if(imageCount > 10) {
        alert('Image requested exceed limit. limit is 10.')
    } else {
            fetchAPI(searchValue, imageCount)
    }

}

function fetchAPI(searchValue, imageCount) {
    fetch(`${pexel_api}search?query=${searchValue}&per_page=${imageCount}`, {
        headers: {
            'Authorization': auth_key
        }
    })
    .then(res => res.json()) // Parse the JSON response
    .then(body => {
        const imageList = body.photos.map((photo) => (
            `<img src="${photo.src.large}"/>` // store <img> tag in array imageList
    ));
        // console.log(imageList)
        return imageList;
    })
    .then(list => {
        document.getElementById("app").innerHTML = list
    })
    .catch(err => {
        console.log(err);
    });
}

