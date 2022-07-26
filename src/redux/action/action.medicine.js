

export const datamedicine = () => (dispatch) => {
    fetch('http://localhost:3004/posts')
  .then((response) => response.json())
  .then((data) => console.log(data));
}