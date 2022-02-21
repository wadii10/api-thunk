import axios from "axios";
import { GET } from "./actionTypes";

export const getCountries = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://apiv3.apifootball.com/?action=get_countries&APIkey=045c25e252e1ae59d2a519448a03a70ee65de02e19406bbfcf473d1a0939fd0b"
    );
    dispatch({
      type: GET,
      payload: res.data.filter(
        (el) =>
          el.country_name == "England" ||
          el.country_name == "France" ||
          el.country_name == "Spain" ||
          el.country_name == "Germany" ||
          el.country_name == "Italy"
      ),
    });
  } catch (error) {
    console.log(error.message);
  }
};
