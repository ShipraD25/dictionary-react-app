import axios from "axios";


export default {
    getAllWords: function (event) {
      return axios.get("/api/words")
    },
    getWord : function(event) {
      return axios.get("/api/words/:word")
    },
    getWordWithLetter : function(event) {
      return axios.get("/api/letters/:letter")
    }
}