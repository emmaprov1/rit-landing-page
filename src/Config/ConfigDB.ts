
const ConfigDB = async () => {
    const request = await fetch('https://ritglobalacademy.com/api/ads/easd3e232q')
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem('contexts', JSON.stringify(data.data))
        console.log(data)
        return true;
    })
    .catch((err) => { 
        console.log(err)
        return false;
    })

    return request;
}

export default ConfigDB; 