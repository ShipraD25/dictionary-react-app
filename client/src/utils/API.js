import axios from "axios";


export default {
    getAllWords: function (event) {
      return axios.get("/api/words")
    },
    getWord : function(query) {
      return axios.get("/api/words/", { params: { q: query }})
    },
    getWordWithLetter : function(event) {
      return axios.get("/api/letters/:letter")
    }
}