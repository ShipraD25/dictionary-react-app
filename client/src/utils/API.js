import axios from "axios";


export default {
    getAllWords: function (event) {
      return axios.get("/api/words")
    },
}