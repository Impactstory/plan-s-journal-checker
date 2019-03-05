import axios from 'axios'
console.log("foo")

function makeInputObj(urlEnd, q, type){
    return {
        url: "https://rickscafe-api.herokuapp.com/" + urlEnd,
        q: q,
        type: type
    }
}

export const store = {

    input: {
        institution: {},
        funder: {},
        journalSearch: {}


    },
    setJournalSearch(input) {
        console.log("set journal search", input)

        if (typeof input === 'string') {
            this.input.journalSearch = makeInputObj(
                "search/journals/" + input,
                input,
                "string"
            )
        }

        else if (input.id) {
            this.input.journalSearch = makeInputObj(
                "journal/" + input.id,
                input.id,
                "journal"
            )

        }
        else if (input.topic) {
            this.input.journalSearch = makeInputObj(
                "topic/" + input.topic,
                input.topic,
                "topic"
            )
        }
    },

    setInstitution(institution) {
        this.input.institution = institution
    },
    setFunder(funder) {
        this.input.funder = funder
    },


    getSearchType(){
        return this.input.journalSearch.type
    },
    getQueryObj(){
        let ret = {
            q: this.input.journalSearch.q,
            type: this.input.journalSearch.type
        }

        if (this.input.institution) {
            ret.institution = this.input.institution.id
        }
        if (this.input.funder) {
            ret.funder = this.input.funder.id
        }
        return ret

    },
    search(){
        let url
        let baseUrl = this.input.journalSearch.url
        if (this.input.institution || this.input.funder){
            let str = "?" + [this.input.institution, this.input.funder]
                .filter(x => {return !!x.id})
                .map(x => {return x.id})
                .join("&")
            url = baseUrl + str
        }

        console.log("doing query with this baseurl", url)

        return axios.get(url)
    },

};

