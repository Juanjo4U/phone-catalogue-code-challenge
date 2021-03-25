export const constants = {
    API: {
        baseUrl: 'http://localhost:3000/', // SET THE API URL HERE
        phones: 'phones/',
        getImageUri: function (image: string): string | undefined {
            if (!image) return
            return this.baseUrl + 'images/' + image
        }
    }
}