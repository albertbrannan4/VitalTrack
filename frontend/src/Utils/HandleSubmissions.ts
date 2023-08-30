import axios from "axios";

const HandleSubmissions = (action: any, url: string, data: any): any => {
  if (action === "post") {
    PostData(url, data);
  } else if (action === "get") {
    console.log("get not set up yet");
  }
};

function PostData(url: string, data: any): any {
  axios
    .post(url, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default HandleSubmissions;
