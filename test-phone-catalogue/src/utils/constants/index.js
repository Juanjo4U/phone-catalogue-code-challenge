export const constants = {
    API: {
        baseUrl: 'http://localhost:3000/', // SET THE API URL HERE
        phones: 'phones/',
        getImageUri: function (image) {
            if (!image) return null
            return this.baseUrl + 'images/' + image
        }
    }
}