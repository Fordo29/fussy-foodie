const getData = () => {
  return fetch(`https://picky-eaters.herokuapp.com/api/v1/foods`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    })
}

export default getData