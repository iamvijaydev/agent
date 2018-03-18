import data from './db'

export class MockFetch {
    constructor() {
        this.body = new ReadableStream()
        this.bodyUsed = false
        this.headers = new Headers()
        this.ok = true
        this.redirected = false
        this.status = 200
        this.statusText = 'ok'
        this.type = 'basic'
        this.url = ''

        this._options = {}
        this._data = data

        return this
    }

    fetch(url, options = {}) {
        this.url = url
        this._options = options
        
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this)
            }, 300)
        })
    }

    json() {
        const getMerchantList = this.url.indexOf('/merchant?') === 0
        const merchantDetails = this.url.indexOf('/merchant/') === 0

        if (getMerchantList) {
            return this._getMerchantList()
        } else if (merchantDetails) {
            return this._merchantDetails()
        }

        return {}
    }

    _getMerchantList() {
        const paramPart = this.url.slice(this.url.indexOf('?') + 1)
        const paramAry = paramPart.split('&')
        let pageNo = 0
        let perPage = 10

        paramAry.forEach(param => {
            const parts = param.split('=')
            const key = parts[0]
            const value = parseInt(parts[1], 10)

            if (!isNaN(value)) {
                if (key === 'page_no') {
                    pageNo = value > 0 ? value - 1 : 0
                } else if (key === 'per_page') {
                    perPage = value <= 0 ? 1 : value
                }
            }
        })

        return this._data.slice(pageNo, perPage)
    }

    _merchantDetails() {
        const method = this._options.method.toLowerCase()
        const id = this.url.split('/merchant/')[1]
        const idInt = parseInt(id, 10)

        if (method === 'post') {
            return this._onPost()
        } else if (method === 'put' || method === 'patch') {
            return this._onPutPatch(idInt)
        }

        return this._onGet(idInt)
    }

    _onPost() {
        const body = JSON.parse(this._options.body)
        const lastId = this._data[this._data.length].id
        const lastIdInt = parseInt(lastId, 10)
        const id = lastIdInt + 1

        this._data.push({
            ...body,
            id
        })

        return {
            id,
            message: 'Saved successfully.'
        }
    }

    _onPutPatch(idInt) {
        if (!isNaN(idInt)) {
            const body = JSON.parse(this._options.body)
            const idStr = idInt.toString()
            const foundIndex = this._data.findIndex(({ id }) => id === idStr)

            if (foundIndex > -1) {
                this._data[foundIndex] = {
                    ...this._data[foundIndex],
                    ...body
                }

                return {
                    id: idStr,
                    message: 'Updated successfully.'
                }
            }
        }

        return {
            id: idInt,
            message: 'Record not found.'
        }
    }

    _onGet(idInt) {
        if (!isNaN(idInt)) {
            const idStr = idInt.toString()
            const found = this._data.find(({ id }) => id === idStr)
    
            if (!!found) {
                return found
            }
        }

        return {}
    }
}

const mockFetch = new MockFetch()
const fetch = mockFetch.fetch

export { mockFetch }
export default fetch