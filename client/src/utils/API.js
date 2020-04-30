import axios from "axios";


export default {
    getAllWords: function (event) {
      return axios.get("/api/words")
    },
    getWord : function(query) {
      return axios.get("/api/words/" + query)
    },
    getWordWithLetter : function(event) {
      return axios.get("/api/letters/:letter")
    }
}